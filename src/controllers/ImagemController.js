import express from "express"
import ImagemService from "./../service/ImagemService"
const router = express.Router()

router.post("/api/imagem", upload.single("file"), async (req, res) => {
    const response = await ImagemService.Create(
        req.body.imagem
    )
    console.log("CONTROLLER RETORNO -------", response)
    res.status(201).send(response) 
})

router.get("/api/imagem/:idImagem", async(req, res) => {
    const response = await ImagemService.Find(req.params.idImagem)
    res.status(200).send(response)
})

export default router