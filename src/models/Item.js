import mongoose from "mongoose";
import Imagem from "./Imagem";

const item = new mongoose.Schema({
    "nome": String,
    "video": String,
    "classificacao": Number,
    "divisaoSilabica": String,
    "imagens": [Imagem]
})

const Item = new mongoose.model("item", item)

export default Item