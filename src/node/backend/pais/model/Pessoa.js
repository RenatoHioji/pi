import mongoose from "mongoose"
import Alarme from "./Alarme"
import Crianca from "./../../criancas/model/Crianca"
import Suporte from "./Suporte"

const pessoa = new mongoose.Schema({
    cpf: String,
    nome: String,
    email: String,
    senha: String,
    dtNasc: Date,
    alarmes: [Alarme],
    criancas: [Crianca],
    suporte: [Suporte]
});

const Pessoa = mongoose.model("pessoa", pessoa)

export default Pessoa