import Pagamento from '../models/pagamentos.js'
import User from "../models/user.js"
import qr from 'qrcode'

class PagamentoController {
    static async createPagamento (req, res) {
        try {
            const {medidor} = req.body
            const {id} = req.params
            const user = await User.findById(id)


            const pix = await Pagamento.create({
                medidor,
                valor: 18 * 2,
                qrCode: await qr.toDataURL('https://www.youtube.com/')
            })
            const newList = [...user.historico_pagamentos, pix]

            user.historico_pagamentos = newList

            await User.findByIdAndUpdate(id, {
                historico_pagamentos: newList,
                new: true
            }, {
                returnDocument: 'after'
            })

            res.status(201).json(pix)
        } catch (error) {
            console.log(error)
            res.status(500).json({'erro': 'algo deu errado'})
        }
    }
    static async findAll (req, res) {
        try {
            
            const pix = await Pagamento.find()

            res.json(pix)

        } catch (error) {
            console.log(error)
            res.status(500).json({'erro': 'algo deu errado'})
        }
    }

    static async deletePagamento (req, res) {
        try {
            
            const {id} = req.params

            await Pagamento.findByIdAndDelete(id)

            res.json({})

        } catch (error) {
            console.log(error)
            res.status(500).json({'erro': 'algo deu errado'})
        }
    }
}

export default PagamentoController