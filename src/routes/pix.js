import { Router } from "express";
import PixController from "../controllers/pix.js";

const pixRouter = Router()

pixRouter.post('/:id', (req, res) => PixController.createPix(req,res))

export default pixRouter