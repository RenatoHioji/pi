import Imagem from "../models/Imagem"

class ImagemRepository{
    async Create(imagem){
        const response = await Imagem.save(imagem)
        return response
    }
}

export default new ImagemRepository()