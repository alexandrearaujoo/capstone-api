import User from '../models/user.js'
import  jwt from 'jsonwebtoken'

class UserControler {
    static async createUser (req, res) {
        try {
            const {email, name, password, avatarUrl, endereco, numero, cidade, estado, bairro, historico_pagamento} = req.body

            const user = await User.create({
                email,
                password,
                name,
                avatarUrl,
                endereco,
                numero,
                cidade,
                estado,
                bairro,
                historico_pagamento
            })

            res.status(201).json(user)

        } catch (error) {
            res.status(500).json({"error": "algo deu errado"})
        }
    }

    static async findAll (req, res) {
        try {
            const users = await User.find()

            res.json(users)
        } catch (error) {
            res.status(500).json({"error": "algo deu errado"})
        }
    }

    static async findOne (req, res) {
        try {
            const { id } = req.params
            const user = await User.findById(id)

            res.json(user)

        } catch (error) {
            res.status(500).json({"error": "algo deu errado"})
        }
    }

    static async updateUser (req, res) {
        try {
            const { id } = req.params
            const { name, password, avatarUrl} = req.body

            const userUpdated = await User.findByIdAndUpdate(id, {
                name,
                password,
                avatarUrl,
                new: true
            }, {
                returnDocument: 'after'
            })

            res.status(200).json(userUpdated)
        } catch (error) {
            res.status(500).json({"error": "algo deu errado"})
        }
    }

    static async deleteUser (req, res) {
        try {
            const { id } = req.params
            await User.findByIdAndDelete(id)

            res.status(204).json({})

        } catch (error) {
            res.status(500).json({"error": "algo deu errado"})
        }
    }

    static async login (req, res) {
        try {
            const {email, password} = req.body

            const user = await User.findOne({
                email
            }).select('+password')

            if (!user) {
                res.status(404).json({'erro': "usuario nao encontrado"})
            }
            if (user.password !== password) {
                res.status(409).json({'erro': 'senha invalida'})
            }
            const token = jwt.sign({
                id: user.id
            }, process.env.SECRET, {
                expiresIn: '1d'
            })

            res.json({token: token})

        } catch (error) {
            res.status(500).json({"error": "algo deu errado"})
        }
    }
}


export default UserControler