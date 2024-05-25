
import CategoriaService from "./../service//CategoriaService"
import express from "express"

const router = express.Router()


//TELA DAS CATEGORIAS
router.get("/api/categoria/", async(req, res) => {
    const response = await CategoriaService.findAll()
    res.status(200).send(response)
})



export default router