import mongoose from "../database/index.js";

const PixSchema = new mongoose.Schema({
    medidor: {
        type: Number,
        required: true,
    },
    valor: {
        type: Number,
        default: 0
    },
    qrCode: {
        type: String,
        default: "data:image/png;base64,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"
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Pix = mongoose.model("Pix", PixSchema)

export default Pix