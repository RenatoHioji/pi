
class PessoaRepository{
    create(pessoa){
        pessoa.save().then(pessoaCriada =>{
            console.log("REPOSITORY -------", pessoaCriada)
            return pessoaCriada
        })
    } 
    
}

export default new PessoaRepository()