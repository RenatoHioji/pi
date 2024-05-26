
import CategoriaService from "./../service//CategoriaService"
import express from "express"

const router = express.Router()


//TELA DAS CATEGORIAS
router.get("/categoria", async(req, res) => {
    const response = await CategoriaService.findAll()
    res.status(200).send(response)
})

router.post("/categoria", upload.single("file"), async(req, res) =>{
    const response = await CategoriaService.save(req.body.nome, req.file.imagem)
    res.status(201).send(response)
})


export default router