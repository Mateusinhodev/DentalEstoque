import ProdutosDataAccess from '../dataAccess/produtos.js';
import { ok, serverError } from '../helpers/httpResponse.js';

export default class ProdutosControllers {
    constructor() {
        this.dataAccess = new ProdutosDataAccess();
    }

    async getProdutos() {
        try {
            const produtos = await this.dataAccess.getProdutos();
            // console.log(produtos)

            return ok(produtos);
        } catch (error) {
            return serverError(error);
        }
    }

    async addProduto(produtoData) {
        try {
            const result = await this.dataAccess.addProduto(produtoData);

            return ok(result);
        } catch (error) {
            return serverError(error);
        }
    }

    async deleteProduto(produtoId) {
        try {
            const result = await this.dataAccess.deleteProduto(produtoId);

            return ok(result);
        } catch (error) {
            return serverError(error);
        }
    }

    async updateProduto(produtoId, produtoData) {
        try {
            const result = await this.dataAccess.updateProduto(produtoId, produtoData);

            return ok(result);
        } catch (error) {
            return serverError(error);
        }
    }
}
