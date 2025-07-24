import express from 'express';
import LocaisControllers from '../controllers/locais.js';

const locaisRouter = express.Router();

const locaisControllers = new LocaisControllers();

locaisRouter.get('/', async(req, res) => {
    const { success, statusCode, body } = await locaisControllers.getLocais();

    res.status(statusCode).send({ success, statusCode, body });
});

locaisRouter.post('/', async(req, res) => {
    const { success, statusCode, body } = await locaisControllers.addLocal(req.body);

    res.status(statusCode).send({ success, statusCode, body });
});

locaisRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await locaisControllers.deleteLocal(req.params.id);

    res.status(statusCode).send({ success, statusCode, body });
});

locaisRouter.put('/:id', async (req, res) => {
    const { success, statusCode, body } = await locaisControllers.updateLocal(req.params.id, req.body);

    res.status(statusCode).send({ success, statusCode, body });
});

export default locaisRouter;