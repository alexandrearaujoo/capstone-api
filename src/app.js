import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/user.js";
import medidorRouter from './routes/medidores.js'

config()
const app = express()

app.use(express.json())

app.use('/users', userRouter)
app.use('/medidores', medidorRouter)


export default app