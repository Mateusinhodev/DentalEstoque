import express from 'express';
import FornecedoresControllers from '../controllers/fornecedores.js';

const fornecedoresRouter = express.Router();

const fornecedoresControllers = new FornecedoresControllers();

fornecedoresRouter.get('/', async(req, res) => {
    const { success, statusCode, body } = await fornecedoresControllers.getFornecedores();

    res.status(statusCode).send({ success, statusCode, body });
});

fornecedoresRouter.post('/', async(req, res) => {
    const { success, statusCode, body } = await fornecedoresControllers.addFornecedor(req.body);

    res.status(statusCode).send({ success, statusCode, body });
});

fornecedoresRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await fornecedoresControllers.deleteFornecedor(req.params.id);

    res.status(statusCode).send({ success, statusCode, body });
});

fornecedoresRouter.put('/:id', async (req, res) => {
    const { success, statusCode, body } = await fornecedoresControllers.updateFornecedor(req.params.id, req.body);

    res.status(statusCode).send({ success, statusCode, body });
});

export default fornecedoresRouter;