
import ItemService from "./../service/ItemService.js"
import express from "express"
import {Item} from "./../models/Item.js"
import multer from 'multer'

const router = express.Router()
const upload = multer({dest:"public/uploads/"})

router.post("/categoria/:idCategoria/subcategoria/:idSubcategoria/item", upload.fields([{name: "imagem"}, {name: "audio"}, {name:"video"}]), async (req, res) => {
    const item = new Item({
        nome,
        classificacao,
        divisaoSilabica,
        imagens: req.files.imagens,
        audio: req.files.audio,
        video: req.files.video
      })
  
    const response = await ItemService.Create(
        req.params.idCategoria,
        req.params.idSubcategoria,
        item
    )
    res.status(201).send(response) 
})

// TELA DOS ITEMS

router.get("/categoria/subcategoria/:idSubcategoria/item", async(req, res) => {
    try{
        const response = await ItemService.findItemByCategoriaId(req.params.idSubcategoria)
        res.status(200).send(response)
    }catch(err){
        console.log(`Não foi possível buscar os items da categoria: ${req.params.idSubcategoria}`)
    }
})


// TELA DO ITEM

router.get("/categoria/subcategoria/item/:idItem", async(req, res) =>{
    try{
        const response = await ItemService.findItemById(req.params.idItem)
        return res.status(200).send(response)
    }catch(err){
        console.log(`Não foi possível buscar o item de id: ${req.params.idItem}`)
    }
})

router.get("/pessoa/:idPessoa/item", async(req, res) => {
    try{
        const response = await ItemService.findByPessoaId(req.params.idPessoa)
        return res.status(200).send(response)
    }catch(err){
        return res.status(500).send("Não foi possível buscar os items dessa pessoa")
    }
})

router.post("/pessoa/:idPessoa/item",upload.fields([{name: "imagem"}, {name: "audio"}, {name:"video"}]), async (req, res) => {
    const item = new Item({
        nome,
        classificacao,
        divisaoSilabica,
        imagens: req.file.imagem,
        audio: req.files.audio,
        video: req.files.video,
      })
      const response = await ItemService.createItemToPessoa(req.params.idPessoa, item)
})

export default router