
import ItemService from "./../service/ItemService"
import express from "express"

const router = express.Router()

// CRIAÇÃO DOS ITENS

router.post("/api/item", async (req, res) => {
    const response = await ItemService.Create(
        req.body.nome,
        req.body.video,
        req.body.classificacao,
        req.body.divisaoSilabica,
        req.body.imagem
    )
    console.log("CONTROLLER RETORNO -------", response)
    res.status(201).send(response) 
})

// TELA DOS ITEMS

router.get("/api/item/:idSubcategoria", async(req, res) => {
    try{
        const response = await ItemService.findItemByCategoriaId(req.params.idSubcategoria)
        res.status(200).send(response)
    }catch(err){
        console.log(`Não foi possível buscar os items da categoria: ${req.params.idSubcategoria}`)
    }
})


// TELA DO ITEM

router.get("/api/item/:idItem", async(req, res) =>{
    try{
        const response = await ItemService.findItemById(req.params.idItem)
        return res.status(200).send(response)
    }catch(err){
        console.log(`Não foi possível buscar o item de id: ${req.params.idItem}`)
    }
})


//TELA FINAL
router.get("/api/item/resultado/:performance", async(req, res) =>{
    try{
        const response = "Parabéns"
        return res.status(200).send(response)
    }catch(err){
        console.log("Não foi possível gerar a tela de resultado")
    }
})


export default router