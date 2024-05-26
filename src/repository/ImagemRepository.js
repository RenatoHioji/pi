import {Imagem} from "./../models/Imagem.js"

class ImagemRepository{
    async save(imagem){
        const response = await Imagem.save(imagem)
        return response
    }
}

export default new ImagemRepository()