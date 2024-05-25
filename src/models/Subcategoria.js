import mongoose from "mongoose";
import {imagem} from "./Imagem.js";
import {item} from "./Item.js";
const subcategoria = new mongoose.Schema({
    "nome": String,
    "Imagem": imagem,
    "items": [item]
})

const Subcategoria = mongoose.model("subcategoria", subcategoria)

export {subcategoria, Subcategoria}