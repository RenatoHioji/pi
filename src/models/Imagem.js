import mongoose from "mongoose";
const imagem = new mongoose.Schema({
    "url": String
})

const Imagem = new mongoose.model("imagem", imagem)

export default Imagem
