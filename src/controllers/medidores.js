import Medidor from "../models/medidores.js"

class MedidorController {
    static async createMedidor (req, res) {
        try {

            const {codigo, endereco, cidade, estado, bairro, numero, cpf, status} = req.body

            const medidor = await Medidor.create({
                codigo,
                endereco,
                cidade,
                estado,
                bairro,
                numero,
                status,
                cpf
            })

            return res.status(200).json(medidor)
            
        } catch (error) {
            return res.status(500).json({"erro": "algo deu errado"})
        }
    }
    
    static async findAll (req, res) {
        try {
            const medidores = await Medidor.find()

            return res.status(200).json(medidores)
        } catch (error) {
            return res.status(500).json({"erro": "algo deu errado"})
        }
    }

    static async findOne (req, res) {
        try {
            const { id } = req.params
            const medidor = await Medidor.findById(id)

            return res.json(medidor)

        } catch (error) {
            return res.status(500).json({"erro": "algo deu errado"})
        }
    }

    static async updateMedidor (req, res) {
        try {

            const {id} = req.params
            const {cpf, status, valorAtual} = req.body

        
            const medidorUpdate = await Medidor.findByIdAndUpdate(id, {
                cpf,
                status,
                valorAtual,
                new: true
            }, {
                returnDocument: 'after'
            })

            return res.json(medidorUpdate)
        } catch (error) {
            return  res.status(500).json({erro: error.message})
        }
    }

    static async deleteMedidor (req, res) {
        try {
            
            const {id} = req.params
            await Medidor.findByIdAndDelete(id)

            return res.status(204).json({})

        } catch (error) {
            console.log(error)
            return res.status(500).json({"erro": "algo deu errado"})
        }
    }
}

export default MedidorController