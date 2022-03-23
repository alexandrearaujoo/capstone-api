import mongoose from "../database/index.js";

const PagamentoSchema = new mongoose.Schema({
    idAssociado: {
        type: String,
        ref: 'User',
        default: null
    },
    name: {
        type: String,
        ref: 'User',
        default: null
    },
    medidor: {
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        default: 0
    },
    qrCode: {
        type: String,
        default: ""
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

const Pagamento = mongoose.model("Pagamento", PagamentoSchema)

export default Pagamento