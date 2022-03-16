import Solicitacoes from "../models/solicitacoes.js"

class SolicitacoesController {
    static async createRequest (req, res) {
        try {
             const {title, description} = req.body  
             
             const request = await Solicitacoes.create({
                title,
                description
             })

             res.status(201).json(request)
        } catch (error) {
            res.status(500).json({'erro': 'algo deu errado'})
        }
    }

    static async getAll (req,res) {
        try {
            const requests = await Solicitacoes.find()

            res.json(requests)

        } catch (error) {
            res.status(500).json({'erro': 'algo deu errado'})
        }
    }

    static async findOne (req, res) {
        try {
            const {id} = req.params
            const request = await Solicitacoes.findById(id)

            res.json(request)

        } catch (error) {
            res.status(500).json({'erro': 'algo deu errado'})
        }
    }

    static async updateRequest (req, res) {
        try {
            const {id} = req.params
            const {status} = req.body
            const requestUpdate = await Solicitacoes.findByIdAndUpdate(id, {
                status,
                new: true
            }, {
                returnDocument: 'after'
            })

            res.json(requestUpdate)
        } catch (error) {
            res.status(500).json({'erro': 'algo deu errado'})   
        }
    }

    static async deleteRequest (req, res) {
        try {
            const {id} = req.params

            await Solicitacoes.findByIdAndDelete(id)

            res.json({})
        } catch (error) {
            res.status(500).json({'erro': 'algo deu errado'})
        }
    }
}

export default SolicitacoesController