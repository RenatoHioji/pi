import mongoose from "mongoose"

const alarme = new mongoose.Schema({
  acao: String,
  horario: String,
  diaDaSemana: Number

})
const pessoa = new mongoose.Schema({
    cpf: String,
    nome: String,
    email: String,
    senha: String,
    dtNasc: Date,
    alarmes: [alarme]
});
const Pessoa = mongoose.model("Pessoa", pessoa)

export default Pessoa