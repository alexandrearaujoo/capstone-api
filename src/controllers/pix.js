import Pix from "../models/pix.js"
import User from "../models/user.js"

class PixController {
    static async createPix (req, res) {
        try {
            const {fatura, valor, qrCode} = req.body
            const {id} = req.params
            const user = await User.findById(id)
            
            const pix = await Pix.create({
                fatura,
                valor,
                qrCode
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
            res.status(500).json({'erro': 'algo deu errado'})
        }
    }
}

export default PixController