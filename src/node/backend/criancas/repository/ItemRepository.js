import SubCategoriaRepository from "./SubCategoriaRepository.js"
import Item from "./../model/Item.js"
class ItemRepository{
    async findItemBySubCategoriaId(subCategoriaId){
        const response = await SubCategoriaRepository.findItemBySubCategoriaId(subCategoriaId)
        return response
    }
    async findItemById(itemId){
        const response = await Item.findById(itemId)
        return response
    }
}

export default new ItemRepository()