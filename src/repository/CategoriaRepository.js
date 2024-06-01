import {Categoria} from "./../models/Categoria.js"
class CategoriaRepository{
    async findAll(){
        const response = await Categoria.find()
        return response
    }

    async findById(idCategoria){
        return await Categoria.findById(idCategoria)
    }
    async save(nome, imagem){
        const categoria = new Categoria({
            nome: nome,
            imagem: imagem
        })
        await categoria.save()
    }
}

export default new CategoriaRepository()