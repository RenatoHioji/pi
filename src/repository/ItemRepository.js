import SubCategoriaRepository from "./SubCategoriaRepository.js"
import {Item} from "./../models/Item.js"
class ItemRepository{
    async findItemBySubCategoriaId(subCategoriaId){
        const response = await SubCategoriaRepository.findItemBySubCategoriaId(subCategoriaId)
        return response
    }
    async findItemById(itemId){
        const response = await Item.findById(itemId)
        return response
    }
    async findAll(){
        const response = await Item.find()
        return response
    }
    async save(item){
        const response= await item.save()
        return response
    }
}

export default new ItemRepository()

