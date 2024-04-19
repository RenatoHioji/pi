import PessoaRepository from "./../repository/PessoaRepository.js"
import Pessoa from "./../model/Pessoa.js"
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
        return pessoaCriada

    }
    async login(cpf, senha){
        const perfil = PessoaRepository.findByCpf(cpf)
        if(perfil.senha == senha){
            console.log("TOKEN CRIAÇÃO")

            const token= jwt.sign({"id": perfil._id}, KEY, {expiresIn: "1h"})
            return token
        }
    }
    async findById(id){
        const idDecodificado =  this.decodeToken(id)
        const perfil = await PessoaRepository.findById(idDecodificado)
        return perfil
        
    }
    async update(id, cpf, nome, email, senha, dtNasc){
        const idDecodificado =  this.decodeToken(id)
        const pessoa = new Pessoa({
            cpf: cpf,
            nome: nome,
            email: email,
            senha: senha,
            dtNasc: dtNasc
        })
        const pessoaAtualizada = await PessoaRepository.update(idDecodificado   , pessoa)
        return pessoaAtualizada
    }
    async deleteById(id){
        return await PessoaRepository.deleteById(id)
    }
    decodeToken(id){
        const decode = jwt.verify(id, KEY)
        return decode.id
    }
}

export default new PessoaService()