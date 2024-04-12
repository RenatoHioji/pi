import mongoose from "mongoose";

const pessoa = new mongoose.Schema({
  cpf: String,
  nome: String,
  email: String,
  senha: String,
  dtNasc: Date
})

const Pessoa = mongoose.model("Pessoa", pessoa)

export default Pessoa