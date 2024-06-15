import {Imagem} from "./../models/Imagem.js"

class ImagemRepository{
    async save(imagem){
        const image = new Imagem({
            url: imagem
        })
        const response = await image.save()
        return response
    }
}

export default new ImagemRepository()