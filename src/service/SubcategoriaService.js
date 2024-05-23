import CategoriaService from "./CategoriaService"
class SubcategoriaService{
    async findSubcategoriaByCategoriaId(categoriaId){
        const response = await CategoriaRepository.findSubCategoriaByCategoriaId(categoriaId)
        return response
    }
}

export default new SubcategoriaService()