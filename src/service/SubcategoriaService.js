import CategoriaRepository from "../repository/CategoriaRepository.js"
import ImagemRepository from "../repository/ImagemRepository.js"
import SubCategoriaRepository from "../repository/SubCategoriaRepository.js"
class SubcategoriaService{
    async findSubcategoriaByCategoriaId(categoriaId){
        const response = await CategoriaRepository.findById(categoriaId)
        return response.subcategoria
    }
    async save(idCategoria, nome, imagem){
        const image = await ImagemRepository.save(imagem)
        const subcategoria = await SubCategoriaRepository.save(nome)
        subcategoria.imagem.push(image)
        await subcategoria.save()

        const categoria = await CategoriaRepository.findById(idCategoria)
        categoria.subcategoria.push(subcategoria)
        
        await categoria.save()
        
        return subcategoria

    }
}


export default new SubcategoriaService()