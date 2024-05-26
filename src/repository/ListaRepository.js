import { Lista } from "./../models/Lista.js";

class ListaRepository{
    async save(nome){
        const lista = new Lista({nome: nome})
        return await lista.save()
    }
    async update(listaId, nome){
        return await Lista.updateOne({_id: listaId}, {$set: {
            nome: nome
        }})
    }
    async delete(listaId){
        return await Lista.findByIdAndDelete(listaId)
    }
    async findById(listaId){
        return await Lista.findById(listaId)
    }    
}

export default new ListaRepository()