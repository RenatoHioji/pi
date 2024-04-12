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
    async Login(cpf, senha){
        const perfil = await PessoaRepository.findByCpf(cpf)
        if(perfil.senha == senha){
            console.log("AUTENTICADO")
        }

    }
    async Perfil(id){
         const perfil = await PessoaRepository.findById(id)
         return perfil
    }
}

export default new PessoaService()