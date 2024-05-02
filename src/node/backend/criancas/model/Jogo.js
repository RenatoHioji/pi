import mongoose from "mongoose";
import Item from "./Item";

const jogo = new mongoose.Schema({
    "tipo": Number,
    "item": [Item]
})

const Jogo = mongoose.model("jogo", jogo)

export default Jogo