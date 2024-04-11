import LoginRepository from "./repository/LoginRepository.js"
class LoginService{
    Create(cpf, nome, email, senha, dtNasc){
        const conta = new Login({
            cpf: cpf,
            nome: nome,
            email: email,
            senha: senha,
            dtNasc: dtNasc
        })
        LoginRepository.create(conta)

    }
    Login(cpf, senha){
        const conta = Login.findByCpf(cpf)
    }
    Perfil(id){
        LoginRepository.findById(id)
    }
}