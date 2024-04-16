import Alarme from "./../model/Alarme.js"

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


    
}


export default new AlarmeRepository()