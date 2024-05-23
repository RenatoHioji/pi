import CategoriaRepository from "./../repository/ItemRepository"

class CategoriaService{
    async findAll(){
        const response = await CategoriaRepository.findAll()
        return response
    }
}

export default new CategoriaService()