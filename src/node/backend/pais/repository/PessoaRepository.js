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
    async findById(id){
        const perfil = await Pessoa.findById(id)
        return perfil
    }
    
}

export default new PessoaRepository()