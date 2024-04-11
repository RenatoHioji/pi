import mongoose from "mongoose";
import Alarme from "./Alarme.js";

const login = new mongoose.Schema({
  cpf: String,
  nome: String,
  email: String,
  senha: String,
  dtNasc: Date,
  alarmes: [{ type: Schema.Types.ObjectId, ref: "Alarme" }] 
})

const Login = mongoose.model("Login", login)

export default Login