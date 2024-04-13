import AlarmeRepository from "./../repository/AlarmeRepository.js"
import Alarme from "./../model/Alarme.js"
import PessoaRepository from "./../repository/PessoaRepository.js"
import Pessoa from "./../model/Pessoa.js"
class AlarmeService{

    async Create(id, acao, horario, diaDaSemana){
        const alarme = new Alarme({
            acao: acao,
            horario: horario,
            diaDaSemana: diaDaSemana            
        })
        const perfil = await PessoaRepository.findById(id)
        
        const alarmeCriado = await AlarmeRepository.create(alarme)
        
        console.log("SERVICE -----", alarmeCriado)

        perfil.alarmes.push(alarmeCriado)
        perfil.save()

        console.log("SERVICE -----", perfil)

        return perfil
    }

}

export default new AlarmeService()