
class ItemRepository{
    async Create(item){
        const response = await item.Create()
    }
}

export default new ItemRepository()