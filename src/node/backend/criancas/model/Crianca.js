import mongoose from "mongoose"
const crianca = new mongoose.Schema({
    "temResponsavel": Boolean,
    "nome": String,
    "progresso": {
       "desempenho": [Number],
       "nome": String,
    }
})

const Crianca = mongoose.model("crianca", crianca)

export default Crianca