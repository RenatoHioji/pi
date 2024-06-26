import {Pessoa, pessoa} from "./../models/Pessoa.js"
class PessoaRepository{
     async create(pessoa){
        const pessoaCriada = await pessoa.save()
        return pessoaCriada 
    } 
    async findByCpf(cpf){
        const perfil = await Pessoa.findOne({cpf: cpf})
        return perfil
    }
    async findByPessoaId(idPessoa){
        const perfil = await Pessoa.findById(idPessoa)
        return perfil
    }
    async update(id, pessoa){
        const pessoaAtualizada = await Pessoa.updateOne(
            {_id: id},
            {$set: {
                    cpf: pessoa.cpf,
                    nome: pessoa.nome,
                    email: pessoa.email,
                    senha: pessoa.senha,
                    dtNasc: pessoa.dtNasc
            }}
        )
        return pessoaAtualizada
    }
    async deleteById(id){
        return await Pessoa.findByIdAndDelete(id)
    }
    async findById(id){
        const pessoa = await Pessoa.findById(id)
        return pessoa
    }

    async findListaByPessoaId(pessoaId){
        const pessoa = await Pessoa.findById(pessoaId)
        return pessoa.lista
    }

    async updateLista(pessoaId){
        return await Pessoa.findById(pessoaId)

    }

    async findItemByPessoaId(pessoaId){
        const pessoa = await Pessoa.findById(pessoaId)
        return pessoa.items
    }

}

export default new PessoaRepository()