import mongoose from "mongoose"

const historico = new mongoose.Schema({
    "message": String
})

const Historico = new mongoose.model("historico", historico)

export default Historico