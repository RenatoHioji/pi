import mongoose from "mongoose"
const crianca = new mongoose.Schema({
    "temResponsavel": Boolean
})

const Crianca = mongoose.model("crianca", crianca)

export default Crianca