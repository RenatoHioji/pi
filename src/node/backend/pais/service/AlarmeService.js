import AlarmeRepository from "./../repository/AlarmeRepository.js"
import Alarme from "./../model/Alarme.js"
import PessoaRepository from "./../repository/PessoaRepository.js"

    class AlarmeService{

    async Create(idPessoa, acao, horario, diaDaSemana){
        const alarme = new Alarme({
            acao: acao,
            horario: horario,
            diaDaSemana: diaDaSemana            
        })
        const perfil = await PessoaRepository.findById(idPessoa)
        
        const alarmeCriado = await AlarmeRepository.create(alarme)
        
        console.log("SERVICE -----", alarmeCriado)

        perfil.alarmes.push(alarmeCriado)
        perfil.save()

        console.log("SERVICE -----", perfil)

        return perfil
    }

    async DeleteById(idAlarme){
        await AlarmeRepository.findByIdAndDelete(idAlarme)
    }

    async findAll(idPessoa){
         const pessoa = await PessoaRepository.findById(idPessoa)
         return pessoa.alarmes
    }
}

export default new AlarmeService()