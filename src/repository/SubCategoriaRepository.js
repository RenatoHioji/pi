import {CategoriaRepository} from "./CategoriaRepository.js"
import {Subcategoria} from "./../model/Subcategoria.js"
class SubCategoriaRepository{
    async findSubCategoriaByCategoriaId(categoriaId){
        const response = await CategoriaRepository.findSubCategoriaByCategoriaId(categoriaId)
        return response
    }
    async findItemBySubCategoriaId(subCategoriaId){
        const response = await Subcategoria.findById(subCategoriaId)
        return response
    }
}


export default new SubCategoriaRepository()