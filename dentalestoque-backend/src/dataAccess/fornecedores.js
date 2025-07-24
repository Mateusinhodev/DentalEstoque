import { Mongo } from "../database/mongo.js";
import { ObjectId } from "mongodb";

const collectionName = 'fornecedores';

export default class FornecedoresDataAccess {
    async getFornecedores() {
        const result = await Mongo.db 
        .collection(collectionName)
        .find({ })
        .toArray();

        return result;
    }

    async addFornecedor(fornecedorData) {
        const result = await Mongo.db 
        .collection(collectionName)
        .insertOne(fornecedorData);

        return result;
    }

    async deleteFornecedor(fornecedorId) {
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndDelete({ _id: new ObjectId(fornecedorId) });

        return result;
    }

    async updateFornecedor(fornecedorId, fornecedorData) {
        
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndUpdate(
            { _id: new ObjectId(fornecedorId) },
            { $set: fornecedorData }
        );

        return result;
    }
        
}