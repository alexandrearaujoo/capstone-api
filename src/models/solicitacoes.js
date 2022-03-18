import mongoose from '../database/index.js'

const SolicitacoesSchema = new mongoose.Schema({
    name: {
        type: String,
        ref: 'User',
        default: null
    },
    title: {
        type: String,
        required: true
    },
    escription: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Pendente"
    },
    tel: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Solicitacoes = mongoose.model('Solicitações', SolicitacoesSchema)

export default Solicitacoes