import SubCategoriaService from "../node/backend/criancas/service/SubcategoriaService"
import express from "express"

const router = express.Router()


//TELA DE SUBCATEGORIAS DA CATEGORIA
router.get("/api/subcategoria/:idCategoria", async(req, res) => {
    const response = await SubCategoriaService.findByCategoriaId(req.params.idCategoria)
    res.status(200).send(response)
})


export default router