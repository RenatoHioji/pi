import {Jogo} from "./../models/Jogo.js"
class JogoService{
    async findByDificuldade(dificuldade){
        return await Jogo.find({dificuldade: dificuldade})
    }
}

export default new JogoService()