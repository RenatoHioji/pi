import {Alarme} from "./../models/Alarme.js"

class AlarmeRepository{
    async create(alarme){
        return await alarme.save()
    }
    
    async findByIdAndDelete(idAlarme){
        return await Alarme.findByIdAndDelete(idAlarme)
    }

    async update(idAlarme, alarmeNovo) {
        const alarmeAtualizado = await Alarme.updateOne(
            {_id: idAlarme},
            {$set: {acao: alarmeNovo.acao, horario: alarmeNovo.horario, diaDaSemana: alarmeNovo.diaDaSemana}}
        );
        return alarmeAtualizado;
    }
    async findById(idAlarme){
        return await Alarme.findById(idAlarme)
    }


    
}


export default new AlarmeRepository()