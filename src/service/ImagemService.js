import ImagemRepository from "../repository/ImagemRepository"


class ImagemService{
    async Create(imagem){
        const response = await ImagemRepository(imagem)
        return response
    }
}

export default new ImagemService()