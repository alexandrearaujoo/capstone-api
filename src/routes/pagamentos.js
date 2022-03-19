import { Router } from "express";
import PagamentoController from "../controllers/pagamentos.js";

const pagamentosRouter = Router()

pagamentosRouter.post('/:id', (req, res) => PagamentoController.createPagamento(req,res))
pagamentosRouter.get('', (req, res) => PagamentoController.findAll(req, res))
pagamentosRouter.delete('/:id', (req, res) => PagamentoController.deletePagamento(req, res))

export default pagamentosRouter