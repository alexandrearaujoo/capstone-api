import { Router } from "express";
import UserControler from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const userRouter = Router()

userRouter.post('', (req, res) => UserControler.createUser(req, res))
userRouter.post('/login', (req, res) => UserControler.login(req,res))
userRouter.get('', (req, res, next) => isAuthenticated(req, res, next), (req, res) => UserControler.findAll(req, res))
userRouter.get('/:id', (req, res) => UserControler.findOne(req, res))
userRouter.patch('/:id', (req, res) => UserControler.updateUser(req, res))
userRouter.delete('/:id', (req, res) => UserControler.deleteUser(req, res))

export default userRouter