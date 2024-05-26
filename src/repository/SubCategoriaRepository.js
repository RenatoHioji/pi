import {CategoriaRepository} from "./CategoriaRepository.js"
import {Subcategoria} from "./../model/Subcategoria.js"

class SubCategoriaRepository{
    async findSubCategoriaByCategoriaId(categoriaId){
        const response = await CategoriaRepository.findById(categoriaId)
        return response.subcategoria
    }
    async findItemBySubCategoriaId(subCategoriaId){
        const response = await Subcategoria.findById(subCategoriaId)
        return response
    }
    async save(nome){
        const sub = new Subcategoria({nome: nome})
        const response = await Subcategoria.save(sub)
        return response
    }

}


export default new SubCategoriaRepository()