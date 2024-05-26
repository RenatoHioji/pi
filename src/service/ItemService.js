import ItemRepository from "./../repository/ItemRepository"
import {Item} from "./../model/Item"
import SubCategoriaRepository from "../repository/SubCategoriaRepository"

class ItemService{
    async Create(subCategoriaId, nome, video, classificacao, divisaoSilabica){
        const item = new Item({
            "nome": nome,
            "video": video,
            "classificacao": classificacao,
            "divisaoSilabica": divisaoSilabica,
            "imagem": req.file.imagem
        })
        const response = await ItemRepository.Create(item)

        const subCategoria = await SubCategoriaRepository.findByid(subCategoriaId)
        subCategoria.items.push(response)
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