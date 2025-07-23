import express from 'express';
import ProdutosControllers from '../controllers/produtos.js';

const produtosRouter = express.Router();

const produtosControllers = new ProdutosControllers();

produtosRouter.get('/', async(req, res) => {
    const { success, statusCode, body } = await produtosControllers.getProdutos();

    res.status(statusCode).send({ success, statusCode, body });
});

produtosRouter.post('/', async(req, res) => {
    const { success, statusCode, body } = await produtosControllers.addProduto(req.body);

    res.status(statusCode).send({ success, statusCode, body });
});

produtosRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await produtosControllers.deleteProduto(req.params.id);

    res.status(statusCode).send({ success, statusCode, body });
});

produtosRouter.put('/:id', async (req, res) => {
    // console.log(req.params)
    const { success, statusCode, body } = await produtosControllers.updateProduto(req.params.id, req.body);

    res.status(statusCode).send({ success, statusCode, body });
});

export default produtosRouter;
