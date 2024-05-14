import ItemRepository from "./../repository/ItemRepository"
import Item from "./../model/Item"

class ItemService{
    async Create(nome, video, classificacao, divisaoSilabica,imagem){
        const item = new Item({
            "nome": nome,
            "video": video,
            "classificacao": classificacao,
            "divisaoSilabica": divisaoSilabica,
            "imagem": imagem
        })
        const response = await ItemRepository.Create(item)
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