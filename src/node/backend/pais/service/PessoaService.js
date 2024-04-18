import PessoaRepository from "./../repository/PessoaRepository.js"
import Pessoa from "./../model/Pessoa.js"
import session from "express-session"
import jwt from "jsonwebtoken"

const KEY = "pi-pais-api-backend"

class PessoaService{
    async create(cpf, nome, email, senha, dtNasc){
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
    async login(cpf, senha){
        const perfil = await PessoaRepository.findByCpf(cpf)
        if(perfil.senha == senha){
            console.log("TOKEN CRIAÇÃO")

            const token= await jwt.sign({"id": perfil._id}, KEY, {expiresIn: "1h"})
            return token
        }
    }
    async findById(id){
        const perfil = await PessoaRepository.findById(id)
        console.log(session.id)
        return perfil
        
    }
    async update(id, cpf, nome, email, senha, dtNasc){
        const pessoa = new Pessoa({
            cpf: cpf,
            nome: nome,
            email: email,
            senha: senha,
            dtNasc: dtNasc
        })
        const pessoaAtualizada = await PessoaRepository.update(id, pessoa)
        return pessoaAtualizada
    }
    async deleteById(id){
        return await PessoaRepository.deleteById(id)
    }
}

export default new PessoaService()