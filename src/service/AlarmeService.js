import AlarmeRepository from "../repository/AlarmeRepository.js"
import {Alarme} from "./../models/Alarme.js"
import ListaRepository from "../repository/ListaRepository.js"
import PessoaRepository from "../repository/PessoaRepository.js"

    class AlarmeService{

    async Create(idPessoa, idLista, acao, horario, diaDaSemana, som){
        const alarme = new Alarme({
            acao: acao,
            horario: horario,
            diaDaSemana: diaDaSemana,
            som: som  
        })
        const lista = await ListaRepository.findById(idLista)
        
        const alarmeCriado = await AlarmeRepository.create(alarme)
        
        lista.alarmes.push(alarmeCriado)

        const listaAtualizada = await lista.save()

        const pessoa = await PessoaRepository.findById(idPessoa)
        
        const listaAntiga = pessoa.lista.id(idLista)
        listaAntiga.alarmes = listaAtualizada.alarmes

        await pessoa.save()
        
        return alarme
    }

    async DeleteById(idPessoa, idLista, idAlarme){
        const pessoa = await PessoaRepository.findById(idPessoa)

        const lista = await ListaRepository.findById(idLista)

        const alarmeLista = lista.alarmes.id(idAlarme)

        await alarmeLista.deleteOne()

        const listaAtualizada = await lista.save()

        const listaAntiga = pessoa.lista.id(idLista)

        listaAntiga.alarmes = listaAtualizada.alarmes
        
        await pessoa.save()

        await AlarmeRepository.findByIdAndDelete(idAlarme)

    }

    async findAllByListaId(idLista){
         const lista = await ListaRepository.findById(idLista)
         return lista.alarmes
    }

    async update(idPessoa, idLista, idAlarme, acao, horario, diaDaSemana, som){
        const alarmeNovo = new Alarme({acao: acao, horario: horario, diaDaSemana: diaDaSemana})
        const pessoa = await PessoaRepository.findById(idPessoa)

        const lista = await ListaRepository.findById(idLista)

        const alarmeAntigo = lista.alarmes.id(idAlarme)

        alarmeAntigo.acao = acao
        alarmeAntigo.horario = horario
        alarmeAntigo.diaDaSemana = diaDaSemana
        alarmeAntigo.som = som

        const listaAtualizada = await lista.save()

        const listaAntiga = pessoa.lista.id(idLista)

        listaAntiga.alarmes = listaAtualizada.alarmes
        
        await pessoa.save()

        const alarmeAtualizado = await AlarmeRepository.update(idAlarme, alarmeNovo)

        return alarmeAtualizado
    }
    async findById(idAlarme){
        const response = await AlarmeRepository.findById(idAlarme)
        return response
    }

}

export default new AlarmeService()