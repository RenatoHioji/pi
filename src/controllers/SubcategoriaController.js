import SubcategoriaService from "./../service/SubcategoriaService.js"
import express from "express"
import multer from 'multer'

const router = express.Router()
const upload = multer({dest:"public/uploads/"})

//TELA DE SUBCATEGORIAS DA CATEGORIA
router.get("/categoria/:idCategoria/subcategoria", async(req, res) => {
    const response = await SubCategoriaService.findByCategoriaId(req.params.idCategoria)
    res.status(200).send(response)
})

router.post("/categoria/:idCategoria/subcategoria", upload.single("file"), async(req, res)=> {
    const response = await SubcategoriaService.save(req.params.idCategoria, req.body.nome, req.file.imagem)
    res.status(201).send(response)
})



export default router