import Categoria from "./../model/Categoria.js"
class CategoriaRepository{
    async findAll(){
        const response = await Categoria.find()
        return response
    }

    async findSubCategoriaByCategoriaId(categoriaId){
        const response = await Categoria.findById({_id: categoriaId})
        return response
    }
}

export default new CategoriaRepository()