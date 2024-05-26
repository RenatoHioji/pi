import CategoriaRepository from "./../repository/CategoriaRepository"
import ImagemRepository from "./../repository/ImagemRepository"
class CategoriaService{
    async findAll(){
        const response = await CategoriaRepository.findAll()
        return response
    }
    async save(nome, imagem){
        const categoria = await CategoriaRepository.save(nome)

        const image = await  ImagemRepository.save(imagem)

        categoria.imagem.push(image)

        await categoria.save()

        return categoria
    }
}

export default new CategoriaService()