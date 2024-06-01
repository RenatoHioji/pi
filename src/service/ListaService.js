import ListaRepository from "./../repository/ListaRepository.js"
import PessoaRepository from "./../repository/PessoaRepository.js"
class ListaService{
    async findByPessoaId(pessoaId){
        return await PessoaRepository.findListaByPessoaId(pessoaId)
    }
    async save(pessoaId, nome){
        const lista = await ListaRepository.save(nome)
        const pessoa = await PessoaRepository.updateLista(pessoaId, lista)
        pessoa.lista.push(lista)
        await pessoa.save()
        return lista
    }
    async update(pessoaId, listaId, nome) {
            const pessoa = await PessoaRepository.findById(pessoaId);
            const listaAtualizada = await ListaRepository.update(listaId, nome);
            const lista = pessoa.lista.id(listaId)
            lista.nome = nome
            await pessoa.save();
            return listaAtualizada;
    } 
    
    async delete(pessoaId, listaId){
        const pessoa = await PessoaRepository.findById(pessoaId)
        
        const listaAntiga = pessoa.lista.id(listaId)

        await listaAntiga.deleteOne()
        
        await pessoa.save()
        return await ListaRepository.delete(listaId)
    }
    async findListaById(listaId){
        return await ListaRepository.findById(listaId)
    }
}

export default new ListaService()