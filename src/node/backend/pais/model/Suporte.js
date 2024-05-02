import mongoose from "mongoose"
import Historico from "./Historico"

const suporte = new mongoose.Schema({
    "estado": Number,
    "historico": [Historico]
})

const Suporte = mongoose.model("suporte", suporte)

export default Suporte