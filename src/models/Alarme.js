import mongoose from "mongoose"

const alarme = new mongoose.Schema({
  acao: String,
  horario: String,
  diaDaSemana: Number
})
 
const Alarme = mongoose.model("Alarme", alarme)

export default Alarme