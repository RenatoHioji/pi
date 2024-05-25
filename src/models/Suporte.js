import mongoose from "mongoose"

const suporte = new mongoose.Schema({
    "estado": Number,
    "historico": [String]
})

const Suporte = mongoose.model("suporte", suporte)

export  {suporte, Suporte}