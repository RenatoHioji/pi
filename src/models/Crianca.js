import mongoose from "mongoose"
import {jogo} from "./Jogo.js"
const crianca = new mongoose.Schema({
    "temResponsavel": Boolean,
    "nome": String,
    "performance": {
        "jogo": jogo,
        "resultado": Number,
    }
})

const Crianca = mongoose.model("crianca", crianca)

export {crianca, Crianca}