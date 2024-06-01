import mongoose from "mongoose";
import {subcategoria} from "./Subcategoria.js";
const categoria = new mongoose.Schema({
    "nome": String,
    "Imagem": String,
    "subcategoria": [subcategoria]
})

const Categoria = mongoose.model("categoria", categoria)

export {categoria, Categoria}