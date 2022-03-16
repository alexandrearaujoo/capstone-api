import mongoose from '../database/index.js'

const SolicitacoesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Pendente"
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Solicitacoes = mongoose.model('Solicitações', SolicitacoesSchema)

export default Solicitacoes