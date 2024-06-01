import mongoose from "mongoose";

const item = new mongoose.Schema({
    "nome": String,
    "classificacao": Number,
    "divisaoSilabica": String,
    "imagem": String,
    audio: String,
    video: String,
})


const Item = new mongoose.model("item", item)

export {item, Item}