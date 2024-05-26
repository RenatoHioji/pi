import mongoose from "mongoose"
import {lista, Lista} from "./Lista.js"
import {crianca} from "./Crianca.js"
import { alarme } from "./Alarme.js";

const pessoa = new mongoose.Schema({
    cpf: String,
    nome: String,
    email: String,
    senha: String,
    dtNasc: Date,
    lista: [lista],
    criancas: [crianca],
});

const Pessoa = mongoose.model("pessoa", pessoa)


export  {pessoa, Pessoa}