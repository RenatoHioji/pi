import ItemRepository from "./../repository/ItemRepository.js"
import SubCategoriaRepository from "../repository/SubCategoriaRepository.js"
import CategoriaRepository from "../repository/CategoriaRepository.js"
import PessoaRepository from "../repository/PessoaRepository.js"

class ItemService{
    async Create(idCategoria, idSubcategoria,item){
        const response = await ItemRepository.Create(item)

        const subCategoria = await SubCategoriaRepository.findByid(idSubcategoria)

        subCategoria.items.push(response)

        const subcategoriaAtualizada  =await subCategoria.save()

        const categoria = await CategoriaRepository.findById(idCategoria)

        const subCategoriaAntiga = categoria.subcategoria.id(idSubcategoria)

        subCategoriaAntiga.items = subcategoriaAtualizada.items
        
        await categoria.save()

        return response
    }

    async findItemByCategoriaId(subCategoriaId){
        const response = await ItemRepository.findItemBySubCategoriaId(subCategoriaId)
        return response
    }
    async findItemById(itemId){
        const response = await ItemRepository.findItemById(itemId)
        return response
    }
    async findByPessoaId(pessoaId){
        const response = await PessoaRepository.findItemByPessoaId(pessoaId)
        return response
    }

    async createItemToPessoa(idPessoa, item){
            const itemCriado = await ItemService.Create(item)
            const pessoa = await PessoaRepository.findById(idPessoa)
            pessoa.items.push(itemCriado)
            await pessoa.save()
            return itemCriado
        
    }
}

export default new ItemService()