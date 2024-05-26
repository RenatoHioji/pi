import SubcategoriaService from "./../service/SubcategoriaService"
import SubCategoriaService from "./../service/SubcategoriaService"
import express from "express"

const router = express.Router()


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