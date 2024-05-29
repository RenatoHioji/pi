import mongoose from "mongoose";
import {item} from "./Item.js";

const jogo = new mongoose.Schema({
    "tipo": Number,
    "dificuldade": Number,
    "item": [item]
})

const Jogo = mongoose.model("jogo", jogo)

export {jogo, Jogo}