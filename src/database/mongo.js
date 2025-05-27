import { MongoClient } from 'mongodb';

export const Mongo = {
    async connect({mongoConnectionString, mongoDbName}) {
        try {
            const client = new MongoClient(mongoConnectionString)

            await client.connect()
            const db = client.db(mongoDbName)

            this.client = client
            this.db = db

            return 'Conectado ao mongo'

        } catch(error) {
            return { text: 'Erro durante a conexão do mongo', error}
        }
        
    }
}