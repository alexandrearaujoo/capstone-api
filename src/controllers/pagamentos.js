import Pagamento from "../models/pagamentos.js";
import User from "../models/user.js";
import qr from "qrcode";

class PagamentoController {
  static async createPagamento(req, res) {
    try {
      const { medidor, status, valor} = req.body;
      const { id } = req.params;
      const user = await User.findById(id);

      const pix = await Pagamento.create({
        idAssociado: user.id,
        name: user.name,
        medidor,
        valor,
        status,
        qrCode: await qr.toDataURL("https://www.youtube.com/"),
      });
      const newList = [...user.historico_pagamentos, pix];

      user.historico_pagamentos = newList;

      await User.findByIdAndUpdate(
        id,
        {
          historico_pagamentos: newList,
          new: true,
        },
        {
          returnDocument: "after",
        }
      );

      return res.status(201).json(pix);
    } catch (error) {
      return res.status(500).json({ erro: "algo deu errado" });
    }
  }
  static async findAll(req, res) {
    try {
      const pix = await Pagamento.find();

      return res.json(pix);
    } catch (error) {
      return res.status(500).json({ erro: "algo deu errado" });
    }
  }

  static async findOne(req, res) {
    try {
      const { id } = req.params;
      const pagamento = await Pagamento.findById(id);

      return res.json(pagamento);
    } catch (error) {
      return res.status(500).json({ erro: "algo deu errado" });
    }
  }

  static async updatePagamento(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const updatePagamento = await Pagamento.findByIdAndUpdate(
        id,
        {
          status,
          new: true,
        },
        {
          returnDocument: "after",
        }
      );
     await this.updateHistorico(updatePagamento);

      return res.json(updatePagamento);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async deletePagamento(req, res) {
    try {
      const { id } = req.params;

      await Pagamento.findByIdAndDelete(id);

      return res.json({});
    } catch (error) {
      return res.status(500).json({ erro: "algo deu errado" });
    }
  }

  static async updateHistorico(newPagamento) {
    try {
      const { historico_pagamentos } = await User.findById(
        newPagamento.idAssociado
      );

      const pagamentoUpdated = historico_pagamentos.map((item) => {
         
          if (item._id.toString() === newPagamento.id) {
              item.status = "Pago"
            }
            return item
        })
        
        await User.findByIdAndUpdate(newPagamento.idAssociado, {
            historico_pagamentos: [...pagamentoUpdated],
            new: true
        });


    } catch (error) {
      return "Algo deu errado";
    }
  }

  
}

export default PagamentoController;
