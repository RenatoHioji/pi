import Pessoa from "../model/Pessoa.js"
import Alarme from "./../model/Alarme.js"

class AlarmeRepository{
    async create(alarme){
        return await alarme.save()
    }
    async findByIdAndDelete(idAlarme){
        return await Alarme.findByIdAndDelete(id)
    }
 
}


export default new AlarmeRepository()