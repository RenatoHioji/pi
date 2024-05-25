import mongoose from "mongoose";
import {imagem} from "./Imagem.js";

const item = new mongoose.Schema({
    "nome": String,
    "video": String,
    "classificacao": Number,
    "divisaoSilabica": String,
    "imagens": [imagem]
})

const Item = new mongoose.model("item", item)

export {item, Item}