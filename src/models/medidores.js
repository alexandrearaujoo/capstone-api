import mongoose from "../database/index.js";

const MedidoresSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
        unique: true
    },
    endereco: {
        type: String,
        required: true,
    },
    numero: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Ativo"
    },
    cretedAt: {
        type: Date,
        default: new Date()
    },
    cpf: {
        type: String,
        ref: "User",
        default: null
    }
})

const Medidor = mongoose.model('Medidores', MedidoresSchema)

export default Medidor