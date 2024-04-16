import Alarme from "../model/Alarme.js"
import Pessoa from "./../model/Pessoa.js"

class PessoaRepository{
     async create(pessoa){
        const pessoaCriada = await pessoa.save()
        return pessoaCriada 
    } 

    async findByCpf(cpf){
        const perfil = await Pessoa.findOne({cpf: cpf})
        return perfil
    }
    async findByPessoaId(idPessoa){
        const perfil = await Pessoa.findById(idPessoa)
        return perfil
    }
    async findById(id){
        const alarme = await Alarme.findById(id)
        return alarme
    }
}

export default new PessoaRepository()