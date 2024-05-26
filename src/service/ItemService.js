import ItemRepository from "./../repository/ItemRepository"
import {Item} from "./../model/Item"
import SubCategoriaRepository from "../repository/SubCategoriaRepository"
import CategoriaRepository from "../repository/CategoriaRepository"

class ItemService{
    async Create(idCategoria, idSubcategoria, nome, video, classificacao, divisaoSilabica){
        const item = new Item({
            "nome": nome,
            "video": video,
            "classificacao": classificacao,
            "divisaoSilabica": divisaoSilabica,
            "imagem": req.file.imagem
        })
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
}

export default new ItemService()