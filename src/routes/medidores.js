import { Router } from "express";
import MedidorControler from "../controllers/medidores.js";

const medidorRouter = Router()

medidorRouter.post('', (req,res) => MedidorControler.createMedidor(req, res))
medidorRouter.get('', (req, res) => MedidorControler.findAll(req,res))
medidorRouter.get('/:id', (req, res) => MedidorControler.findOne(req,res))
medidorRouter.patch('/:id', (req, res) => MedidorControler.updateMedidor(req,res))
medidorRouter.delete('/:id', (req, res) => MedidorControler.deleteMedidor(req, res))


export default medidorRouter