import CategoriaRepository from "./CategoriaRepository.js"
import {Subcategoria} from "./../models/Subcategoria.js"

class SubCategoriaRepository{
    async findSubCategoriaByCategoriaId(categoriaId){
        const response = await CategoriaRepository.findById(categoriaId)
        return response.subcategoria
    }
    async findItemBySubCategoriaId(subCategoriaId){
        const response = await Subcategoria.findById(subCategoriaId)
        return response.items
    }
    async save(nome){
        const sub = new Subcategoria({nome: nome})
        const response = await Subcategoria.save(sub)
        return response
    }

}


export default new SubCategoriaRepository()