import PessoaRepository from "./../repository/PessoaRepository.js"
import Pessoa from "./../model/Pessoa.js"
class PessoaService{
    async Create(cpf, nome, email, senha, dtNasc){
        const pessoa = new Pessoa({
            cpf: cpf,
            nome: nome,
            email: email,
            senha: senha,
            dtNasc: dtNasc
        })
        const pessoaCriada = await PessoaRepository.create(pessoa)
        console.log("SERVICE -----", pessoaCriada)
        return pessoaCriada

    }
    Pessoa(cpf, senha){
        const perfil = Pessoa.findByCpf(cpf)

        return perfil
    }
    async Perfil(id){
         const perfil = await PessoaRepository.findById(Pessoa, id)
         return perfil
    }
}

export default new PessoaService()