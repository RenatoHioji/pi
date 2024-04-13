

class AlarmeRepository{
    async create(alarme){
        return await alarme.save()
    }
}


export default new AlarmeRepository()