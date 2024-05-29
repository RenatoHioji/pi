import mongoose from "mongoose"
import {lista} from "./Lista.js"
import {crianca} from "./Crianca.js"
import { item } from "./Item.js";

const pessoa = new mongoose.Schema({
    cpf: String,
    nome: String,
    email: String,
    senha: String,
    dtNasc: Date,
    lista: [lista],
    criancas: [crianca],
    items: [item]
});

const Pessoa = mongoose.model("pessoa", pessoa)


export  {pessoa, Pessoa}