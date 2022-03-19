import Medidor from "../models/medidores.js"

class MedidorController {
    static async createMedidor (req, res) {
        try {

            const {codigo, endereco, cidade, estado, bairro, numero, idAssociado} = req.body

            const medidor = await Medidor.create({
                codigo,
                endereco,
                cidade,
                estado,
                bairro,
                numero,
                idAssociado
            })

            res.status(200).json(medidor)
            
        } catch (error) {
            res.status(500).json({"erro": "algo deu errado"})
        }
    }
    
    static async findAll (req, res) {
        try {
            const medidores = await Medidor.find()

            res.status(200).json(medidores)
        } catch (error) {
            res.status(500).json({"erro": "algo deu errado"})
        }
    }

    static async findOne (req, res) {
        try {
            const { id } = req.params
            const medidor = await Medidor.findById(id)

            res.json(medidor)

        } catch (error) {
            res.status(500).json({"erro": "algo deu errado"})
        }
    }

    static async updateMedidor (req, res) {
        try {

            const {id} = req.params
            const {idAssociado} = req.body
            const medidorUpdate = await Medidor.findByIdAndUpdate(id, {
                idAssociado,
                new: true
            }, {
                returnDocument: 'after'
            })

            res.json(medidorUpdate)
        } catch (error) {
            res.status(500).json({"erro": "algo deu errado"})
        }
    }

    static async deleteMedidor (req, res) {
        try {
            
            const {id} = req.params
            await Medidor.findByIdAndDelete(id)

            res.status(204).json({})

        } catch (error) {
            console.log(error)
            res.status(500).json({"erro": "algo deu errado"})
        }
    }
}

export default MedidorController