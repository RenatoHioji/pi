import mongoose from "mongoose"
const orientacao = new mongoose.Schema({
    "titulo": String,
    "subtitulo": String,
    "corpo": String
});

const Orientacao = mongoose.model("orientacao", orientacao)

export default Orientacao