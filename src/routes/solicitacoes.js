import { Router } from "express";
import SolicitacoesController from "../controllers/solicitacoes.js";

const requestRouter = Router()

requestRouter.post('', (req,res) => SolicitacoesController.createRequest(req, res))
requestRouter.get('', (req, res) => SolicitacoesController.getAll(req, res))
requestRouter.get('/:id', (req, res) => SolicitacoesController.findOne(req, res))
requestRouter.patch('/:id', (req, res) => SolicitacoesController.updateRequest(req, res))
requestRouter.delete('/:id', (req, res) => SolicitacoesController.deleteRequest(req, res))

export default requestRouter