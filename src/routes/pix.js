import { Router } from "express";
import PixController from "../controllers/pix.js";

const pixRouter = Router()

pixRouter.post('', (req, res) => PixController.createPix(req,res))

export default pixRouter