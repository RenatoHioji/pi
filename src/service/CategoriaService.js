import CategoriaRepository from "./../repository/CategoriaRepository.js"
class CategoriaService{
    async findAll(){
        const response = await CategoriaRepository.findAll()
        return response
    }
    async save(nome, imagem){
        const categoria = await CategoriaRepository.save(nome, imagem)

        return categoria
    }
}

export default new CategoriaService()