
import ItemService from "./../service/ItemService.js"
import express from "express"
import {Item} from "./../models/Item.js"
import multer from 'multer'
import path from "path"
const router = express.Router()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let uploadPath
        if (file.fieldname === 'imagem') {
            uploadPath = path.join('public', 'uploads', 'imagens')
        } else if (file.fieldname === 'audio') {
            uploadPath = path.join('public', 'uploads', 'audios')
        } else if (file.fieldname === 'video') {
            uploadPath = path.join('public', 'uploads', 'videos')
        }
        cb(null, uploadPath)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })
router.post("/categoria/:idCategoria/subcategoria/:idSubcategoria/item", upload.fields([{name: "imagem"}, {name: "audio"}, {name:"video"}]), async (req, res) => {
    const imagens = req.files.imagem ? req.files.imagem.map(file => path.join('imagens', file.originalname)) : []
    const audio = req.files.audio ? path.join('audios', req.files.audio[0].originalname) : null
    const video = req.files.video ? path.join('videos', req.files.video[0].originalname) : null
    const item = new Item({
        nome,
        classificacao,
        divisaoSilabica,
        imagens,
        audio,
        video
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
router.get("/pessoa/:idPessoa/item", async (req, res) => {
    try {
        const response = await ItemService.findByPessoaId(req.params.idPessoa);
        res.status(200).send(response);
    } catch (err) {
        return res.status(500).send("Não foi possível buscar os items dessa pessoa: " + err);
    }
});


router.post("/pessoa/:idPessoa/item",upload.fields([{name: "imagem"}, {name: "audio"}, {name:"video"}]), async (req, res) => {
    const nome = req.body.nome
    const classificacao = req.body.classificacao
    const divisaoSilabica = req.body.divisaoSilabicax
    const imagens = req.files.imagem ? path.join('imagens', req.files.imagem[0].originalname) : null
    const audio = req.files.audio ? path.join('audios', req.files.audio[0].originalname) : null
    const video = req.files.video ? path.join('videos', req.files.video[0].originalname) : null
    console.log(imagens)
    console.log(video)
    console.log(audio)
    const item = new Item({
        nome,
        classificacao,
        divisaoSilabica,
        audio,
        video
      })
      const response = await ItemService.createItemToPessoa(req.params.idPessoa, item, imagens)
      res.status(200).send(response)
})

export default router