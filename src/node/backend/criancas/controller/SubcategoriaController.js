import SubCategoriaService from "../service/SubcategoriaService"
import express from "express"

const router = express.Router()

router.get("/api/subcategoria/:idCategoria", async(req, res) => {
    const response = await SubCategoriaService.findByCategoriaId(req.params.idCategoria)
    res.status(200).send(response)
})


export default router