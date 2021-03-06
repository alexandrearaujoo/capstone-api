import mongoose from "../database/index.js";
import MedidorController from "../controllers/medidores.js";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    numero: {
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
    avatarUrl: {
        type: String,
        required: true,
        default: "https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1016744034?k=20&m=1016744034&s=170667a&w=0&h=JlerB4H3IeLolDMQOYiAF9uLuZeW0bs4jH6NdrNPDtE="
    },
    historico_pagamentos: {
        type: Array,
        default: []
    },
    tipo_user: {
        type: String,
        default: "Associado"
    },
    status: {
        type: String,
        default: "Ativo"
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})

const User = mongoose.model('User', UserSchema)

export default User