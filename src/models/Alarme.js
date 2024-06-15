import mongoose from "mongoose"

const alarme = new mongoose.Schema({
  acao: String,
  horario: String,
  diaDaSemana: [Number],
  som: String
})
 
const Alarme = mongoose.model("Alarme", alarme)

export  {alarme, Alarme}