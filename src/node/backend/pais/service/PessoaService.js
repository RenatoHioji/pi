import PessoaRepository from "./../repository/PessoaRepository.js"
import Pessoa from "./../model/Pessoa.js"
class PessoaService{
    Create(cpf, nome, email, senha, dtNasc){
        const pessoa = new Pessoa({
            cpf: cpf,
            nome: nome,
            email: email,
            senha: senha,
            dtNasc: dtNasc
        })
        const pessoaCriada = PessoaRepository.create(pessoa)
        console.log("SERVICE -----", pessoaCriada)
        return pessoaCriada

    }
    Pessoa(cpf, senha){
        const perfil = Pessoa.findByCpf(cpf)

        return perfil
    }
    Perfil(id){
        return PessoaRepository.findById(id)
    }
}

export default new PessoaService()