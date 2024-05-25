import mongoose from "mongoose";
import {imagem} from "./Imagem.js";
import {subcategoria} from "./Subcategoria.js";
const categoria = new mongoose.Schema({
    "nome": String,
    "Imagem": imagem,
    "subcategoria": [subcategoria]
})

const Categoria = mongoose.model("categoria", categoria)

export {categoria, Categoria}