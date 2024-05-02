import ItemRepository from "./../repository/ItemRepository"
import Item from "./../model/Item"

class ItemService{
    async Create(nome, video, classificacao,categoria,imagem){
        const item = new Item({
            "nome": nome,
            "video": video,
            "classificacao": classificacao,
            "categoria": categoria,
            "imagem": imagem
        })
        const response = await ItemRepository.Create(item)
        return response
    }
}

export default new ItemService()