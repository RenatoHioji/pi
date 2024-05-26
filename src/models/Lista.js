import mongoose from "mongoose";
import { alarme } from "./Alarme.js";
const lista = new mongoose.Schema({
    "nome": String,
    "alarmes":[alarme]
})

const Lista = new mongoose.model("lista", lista)

export {lista, Lista}