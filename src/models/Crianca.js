import mongoose from "mongoose"
const jogo = new mongoose.Schema({
    "tipo": Number,
    "item": [Item]
})
const crianca = new mongoose.Schema({
    "temResponsavel": Boolean,
    "nome": String,
    "performance": {
        "jogo": jogo,
        "resultado": Number,
    }
})

const Crianca = mongoose.model("crianca", crianca)

export default Crianca