import mongoose from "mongoose"
import Crianca from "./Crianca"
import Jogo from "./Jogo"
const performance = new mongoose.Schema({
    "crianca": Crianca,
    "jogo": Jogo,
    "resultado": Number,
})

const Perfomance = mongoose.model("performance", performance)

export default Performance
