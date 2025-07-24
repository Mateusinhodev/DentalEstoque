import FornecedoresDataAccess from '../dataAccess/fornecedores.js';
import { ok, serverError } from '../helpers/httpResponse.js';

export default class FornecedoresControllers {
    constructor() {
        this.dataAccess = new FornecedoresDataAccess();
    }

    async getFornecedores() {
        try {
            const fornecedores = await this.dataAccess.getFornecedores();
            // console.log(fornecedores)

            return ok(fornecedores);
        } catch (error) {
            return serverError(error);
        }
    }

    async addFornecedor(fornecedorData) {
        try {
            const result = await this.dataAccess.addFornecedor(fornecedorData);

            return ok(result);
        } catch (error) {
            return serverError(error);
        }
    }

    async deleteFornecedor(fornecedorId) {
        try {
            const result = await this.dataAccess.deleteFornecedor(fornecedorId);

            return ok(result);
        } catch (error) {
            return serverError(error);
        }
    }

    async updateFornecedor(fornecedorId, fornecedorData) {
        try {
            const result = await this.dataAccess.updateFornecedor(fornecedorId, fornecedorData);

            return ok(result);
        } catch (error) {
            return serverError(error);
        }
    }
}