import CategoriaRepository from "../repository/CategoriaRepository"
import ImagemRepository from "../repository/ImagemRepository"
import SubCategoriaRepository from "../repository/SubCategoriaRepository"
class SubcategoriaService{
    async findSubcategoriaByCategoriaId(categoriaId){
        const response = await CategoriaRepository.findById(categoriaId)
        return response.subcategoria
    }
    async save(idCategoria, nome, imagem){
        const imagem = await ImagemRepository.save(imagem)
        const subcategoria = await SubCategoriaRepository.save(nome)
        subcategoria.imagem.push(imagem)
        await subcategoria.save()

        const categoria = await CategoriaRepository.findById(idCategoria)
        categoria.subcategoria.push(subcategoria)
        
        await categoria.save()
        
        return subcategoria

    }
}


export default new SubcategoriaService()