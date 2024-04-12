
class PessoaRepository{
     async create(pessoa){
        const pessoaCriada = await pessoa.save()
        return pessoaCriada 
    } 
    
}

export default new PessoaRepository()