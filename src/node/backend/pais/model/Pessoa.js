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

pessoa.pre('findOneAndDelete', async function(next) {
  try {
    const doc = await this.model.findOne(this.getQuery());
    if (doc && doc.alarmes.length > 0) {
      await alarme.deleteMany({ _id: { $in: doc.alarmes } });
    }
    next();
  } catch (error) {
    next(error);
  }
});
const Pessoa = mongoose.model("Pessoa", pessoa)

export default Pessoa