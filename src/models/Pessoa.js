import mongoose from "mongoose"
import {alarme} from "./Alarme.js"
import {crianca} from "./Crianca.js"

const pessoa = new mongoose.Schema({
    cpf: String,
    nome: String,
    email: String,
    senha: String,
    dtNasc: Date,
    alarmes: [alarme],
    criancas: [crianca],
});

const Pessoa = mongoose.model("pessoa", pessoa)

export  {pessoa, Pessoa}