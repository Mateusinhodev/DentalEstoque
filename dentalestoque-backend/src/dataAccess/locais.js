import { Mongo } from "../database/mongo.js";
import { ObjectId } from "mongodb";

const collectionName = 'locais'

export default class LocaisDataAccess {
    async getLocais() {
        const result = await Mongo.db 
        .collection(collectionName)
        .find({ })
        .toArray()

        return result
    }

    async addLocal(localData) {
        const result = await Mongo.db 
        .collection(collectionName)
        .insertOne(localData)

        return result
    }

    async deleteLocal(localId) {
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndDelete({ _id: new ObjectId(localId) })

        return result
    }

    async updateLocal(localId, localData) {
        
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndUpdate(
            { _id: new ObjectId(localId) },
            { $set: localData }
        )

        return result
    }
        
}