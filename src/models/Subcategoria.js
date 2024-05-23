import mongoose from "mongoose";
import Imagem from "./../../imagens/model/Imagem";
import Item from "./Item";
const subcategoria = new mongoose.Schema({
    "nome": String,
    "Imagem": Imagem,
    "items": [Item]
})

const Subcategoria = mongoose.model("subcategoria", subcategoria)

export default Subcategoria