import User from '../models/user.js'
import  jwt from 'jsonwebtoken'

class UserControler {
    static async createUser (req, res) {
        try {
            const {email, name, password,cpf,tipo_user,status, avatarUrl, endereco, numero, cidade, estado, bairro, historico_pagamento} = req.body

            const user = await User.create({
                email,
                password,
                name,
                cpf,
                avatarUrl,
                endereco,
                numero,
                cidade,
                estado,
                bairro,
                tipo_user,
                status,
                historico_pagamento
            })

            return res.status(201).json(user)

        } catch (error) {
            return res.status(500).json({"error": "algo deu errado"})
        }
    }

    static async findAll (req, res) {
        try {
            const users = await User.find()

            return res.json(users)
        } catch (error) {
            return res.status(500).json({"error": "algo deu errado"})
        }
    }

    static async findOne (req, res) {
        try {
            const { id } = req.params
            const user = await User.findById(id)

            return res.json(user)

        } catch (error) {
            return res.status(500).json({"error": "algo deu errado"})
        }
    }

    static async updateUser (req, res) {
        try {
            const { id } = req.params
            const { name, password, avatarUrl, tipo_user, status} = req.body

            const userUpdated = await User.findByIdAndUpdate(id, {
                name,
                password,
                avatarUrl,
                tipo_user,
                status,
                new: true
            }, {
                returnDocument: 'after'
            })

             return res.status(200).json(userUpdated)
        } catch (error) {
            return res.status(500).json({"error": "algo deu errado"})
        }
    }

    static async deleteUser (req, res) {
        try {
            const { id } = req.params
            await User.findByIdAndDelete(id)

           return res.status(204).json({})

        } catch (error) {
            return res.status(500).json({"error": "algo deu errado"})
        }
    }

    static async login (req, res) {
        try {
            const {cpf} = req.body

            const user = await User.findOne({
                cpf
            })

            if (!user) {
                throw new Error({'erro': "Usuario não encontrado"})
            }
            if (user.cpf !== cpf) {
                throw new Error({'erro': 'CPF inválido'})
            }
            const token = jwt.sign({
                id: user.id
            }, process.env.SECRET, {
                expiresIn: '1d'
            })

            return res.json({
                token: token, 
                id: user.id, 
                name: user.name, 
                tipo_user: user.tipo_user, 
                createdAt: user.createdAt,
                endereco: user.endereco,
                bairro: user.bairro,
                cidade: user.cidade,
                estado: user.estado
            })

        } catch (error) {
            res.status(500).json({"error": "algo deu errado"})
            }
        }
        static async loginAdm (req, res) {
            try {
                const {email, password} = req.body

                const user = await User.findOne({
                    email,
                }).select("+password")

            if (!user) {
                throw new Error({'erro': "Usuario não encontrado"})
            }
            if (user.password !== password) {
                throw new Error({'erro': 'Senha inválido'})
            }
            const token = jwt.sign({
                id: user.id
            }, process.env.SECRET, {
                expiresIn: '1d'
            })

            return res.json({
                token: token, 
                id: user.id, 
                name: user.name, 
                tipo_user: user.tipo_user, 
                createdAt: user.createdAt,
                endereco: user.endereco,
                bairro: user.bairro,
                cidade: user.cidade,
                estado: user.estado
            })

        } catch (error) {
            res.status(404).json({"error": "algo deu errado"})
        }
    }
}


export default UserControler