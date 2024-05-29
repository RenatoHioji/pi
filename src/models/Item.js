import mongoose from "mongoose";
import {imagem} from "./Imagem.js";

const item = new mongoose.Schema({
    "nome": String,
    "classificacao": Number,
    "divisaoSilabica": String,
    "imagens": [imagem],
    audio: String,
    video: String,
})


const Item = new mongoose.model("item", item)

export {item, Item}