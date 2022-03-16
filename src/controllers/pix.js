import Pix from "../models/pix.js"

class PixController {
    static async createPix (req, res) {
        try {
            const {fatura, valor, qrCode} = req.body

            const pix = await Pix.create({
                fatura,
                valor,
                qrCode
            })

            res.status(201).json(pix)
        } catch (error) {
            res.status(500).json({'erro': 'algo deu errado'})
        }
    }
}

export default PixController