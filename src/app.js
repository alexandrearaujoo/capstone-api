import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/user.js";
import medidorRouter from './routes/medidores.js'
import requestRouter from './routes/solicitacoes.js'
import pagamentosRouter from './routes/pagamentos.js'
import cors from 'cors'

config()
const app = express()

app.use(express.json())
app.use(cors())

app.use('/users', userRouter)
app.use('/medidores', medidorRouter)
app.use('/solicitacoes', requestRouter)
app.use('/pagamentos', pagamentosRouter)


export default app