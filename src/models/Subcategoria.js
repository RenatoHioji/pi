import mongoose from "mongoose";
import {item} from "./Item.js";
const subcategoria = new mongoose.Schema({
    "nome": String,
    "Imagem": String,
    "items": [item]
})

const Subcategoria = mongoose.model("subcategoria", subcategoria)

export {subcategoria, Subcategoria}