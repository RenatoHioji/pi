import mongoose from "mongoose"

const historico = new mongoose.Schema({
    "message": String
})
const alarme = new mongoose.Schema({
    acao: String,
    horario: String,
    diaDaSemana: Number
  
})
const crianca = new mongoose.Schema({
    "temResponsavel": Boolean
})

const suporte = new mongoose.Schema({
    "estado": Number,
    "historico": [historico]
})

const pessoa = new mongoose.Schema({
    cpf: String,
    nome: String,
    email: String,
    senha: String,
    dtNasc: Date,
    alarmes: [alarme],
    criancas: [crianca],
    suporte: [suporte]
});

const Pessoa = mongoose.model("pessoa", pessoa)

export default Pessoa