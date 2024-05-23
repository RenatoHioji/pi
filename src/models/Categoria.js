import mongoose from "mongoose";
import Imagem from "./../../imagens/model/Imagem";
import Subcategoria from "./Subcategoria";
const categoria = new mongoose.Schema({
    "nome": String,
    "Imagem": Imagem,
    "subcategoria": [Subcategoria]
})

const Categoria = mongoose.model("categoria", categoria)

export default Categoria