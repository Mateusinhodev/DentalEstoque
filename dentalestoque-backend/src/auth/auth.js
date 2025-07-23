import express from 'express';
import passport from 'passport';
import { Buffer } from 'node:buffer';
import LocalStrategy from 'passport-local';
import crypto from 'crypto';
import { Mongo } from '../database/mongo.js';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

const collectionName = 'users';

passport.use(new LocalStrategy({ usernameField: 'email' }, async(email, password, callback) => {
    const user = await Mongo.db
          .collection(collectionName)
          .findOne({ email: email });

    if(!user){
        return callback(null, false);
    }

    const saltBuffer = user.salt.buffer;

    crypto.pbkdf2(password, saltBuffer, 310000, 16, 'sha256', (err, hashedPassword) => {
        if(err) {
            return callback(null, false);
        }

        const userPasswordBuffer = Buffer.from(user.password.buffer);

        if(!crypto.timingSafeEqual(userPasswordBuffer, hashedPassword)) {
            return callback(null, false);
        }

        const { _password, _salt, ...rest } = user;

        return callback(null, rest);
    });
}));

const authRouter = express.Router();

// eslint-disable-next-line no-control-regex
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

authRouter.post('/signup', async (req, res) => {
    req.body.email = String(req.body.email);
    req.body.password = String(req.body.password);

    if (!emailRegex.test(req.body.email)) {
        return res.status(422).send({
            success: false,
            statusCode: 422,
            body: {
                text: "Email Inválido!"
            }
        });
    }

    const checkUser = await Mongo.db
          .collection(collectionName)
          .findOne({ email: req.body.email });

    if(checkUser) {
        return res.status(400).send({
            success: false,
            statusCode: 400,
            body: {
                text: "Usuário já existe!"
            }
        });
    }

    const salt = crypto.randomBytes(16);
    crypto.pbkdf2(req.body.password, salt, 310000, 16, 'sha256', async (err, hashedPassword) => {
        if(err) {
            return res.status(500).send({
                success: false,
                statusCode: 500,
                body: {
                    text: "Erro na senha criptografada!",
                    err: err
                }
            });
        }

        const result = await Mongo.db
              .collection(collectionName)
              .insertOne({
                  email: req.body.email,
                  password: hashedPassword,
                  salt
              });

        if(result.insertedId) {
            const user = await Mongo.db
                  .collection(collectionName)
                  .findOne({ _id: new ObjectId(result.insertedId)});

            const token = jwt.sign(user, 'secret');

            return res.status(201).send({
                success: true,
                statusCode: 201,
                body: {
                    text: "Usuário registrado com sucesso!",
                    token,
                    user,
                    logged: true
                }
            });
        }
    });
});

authRouter.post('/login', (req, res) => {
    passport.authenticate('local', (error, user) => {
        if(error) {
            return res.status(500).send({
                success: false,
                statusCode: 500,
                body: {
                    text: "Erro durante a autenticação!",
                    error
                }
            });
        }

        if(!user) {
            return res.status(401).send({
                success: false,
                statusCode: 401,
                body: {
                    text: "Login ou senha inválidas!"
                }
            });
        }

        const token = jwt.sign(user, 'secret');
        return res.send({
            success: true,
            statusCode: 200,
            body: {
                text: "Usuário logado com sucesso!",
                user,
                token
            }
        });
    })(req, res);
});

export default authRouter;
