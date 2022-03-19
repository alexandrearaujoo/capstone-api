import mongoose from "../database/index.js";

const PagamentoSchema = new mongoose.Schema({
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
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Pagamento = mongoose.model("Pagamento", PagamentoSchema)

export default Pagamento