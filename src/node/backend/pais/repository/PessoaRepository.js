
class PessoaRepository{
     async create(pessoa){
        const pessoaCriada = await pessoa.save()
        return pessoaCriada 
    } 
    async findById(Pessoa, id){
        const perfil = await Pessoa.findById(id)
        return perfil
    }
    
}

export default new PessoaRepository()