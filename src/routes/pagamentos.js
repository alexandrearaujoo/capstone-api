import { Router } from "express";
import PagamentoController from "../controllers/pagamentos.js";

const pagamentosRouter = Router()

pagamentosRouter.post('/:id', (req, res) => PagamentoController.createPagamento(req,res))
pagamentosRouter.get('', (req, res) => PagamentoController.findAll(req, res))
pagamentosRouter.get('/:id', (req, res) => PagamentoController.findOne(req, res))
pagamentosRouter.patch('/:id', (req, res) => PagamentoController.updatePagamento(req, res))
pagamentosRouter.delete('/:id', (req, res) => PagamentoController.deletePagamento(req, res))

export default pagamentosRouter