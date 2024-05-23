import mongoose from "mongoose"

const historico = new mongoose.Schema({
    "message": String
})

const suporte = new mongoose.Schema({
    "estado": Number,
    "historico": [historico]
})

const Suporte = mongoose.model("suporte", suporte)

export default Suporte