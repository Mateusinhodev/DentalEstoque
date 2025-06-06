import LocaisDataAccess from '../dataAccess/locais.js'
import { ok, serverError } from '../helpers/httpResponse.js'

export default class LocaisControllers {
    constructor() {
        this.dataAccess = new LocaisDataAccess()
    }

    async getLocais() {
        try {
            const locais = await this.dataAccess.getLocais()
            // console.log(locais)

            return ok(locais)
        } catch (error) {
            return serverError(error)
        }
    }

    async addLocal(localData) {
        try {
            const result = await this.dataAccess.addLocal(localData)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async deleteLocal(localId) {
        try {
            const result = await this.dataAccess.deleteLocal(localId)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async updateLocal(localId, localData) {
        try {
            const result = await this.dataAccess.updateLocal(localId, localData)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }
}