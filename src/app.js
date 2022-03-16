import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/user.js";
import medidorRouter from './routes/medidores.js'
import requestRouter from './routes/solicitacoes.js'
import pixRouter from './routes/pix.js'

config()
const app = express()

app.use(express.json())

app.use('/users', userRouter)
app.use('/medidores', medidorRouter)
app.use('/solicitacoes', requestRouter)
app.use('/pix', pixRouter)


export default app