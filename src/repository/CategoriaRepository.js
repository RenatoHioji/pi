import {Categoria} from "./../model/Categoria.js"
class CategoriaRepository{
    async findAll(){
        const response = await Categoria.find()
        return response
    }

    async findById(idCategoria){
        return await Categoria.findById(idCategoria)
    }
}

export default new CategoriaRepository()