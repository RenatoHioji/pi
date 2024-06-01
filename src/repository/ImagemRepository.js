import {Imagem} from "./../models/Imagem.js"

class ImagemRepository{
    async save(imagem){
        const image = new Imagem({
            nome: imagem
        })
        const response = await image.save()
        return response
    }
}

export default new ImagemRepository()