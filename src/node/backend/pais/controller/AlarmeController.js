import express from "express"
import AlarmeService from "./../service/AlarmeService.js"


const router = express.Router()

router.post("/api/alarme", async (req, res) => {
    const response = await AlarmeService.Create(
        req.body.id,
        req.body.acao,
        req.body.horario,
        req.body.diaDaSemana
    )
    console.log("CONTROLLER RETORNO -------", response)
    res.status(201).send(response) 
})

router.delete("/api/alarme", async(req, res) =>{
    AlarmeService.DeleteById(req.body.id)
    res.status(204).send()
})

router.get("/api/alarme/:idPessoa", async(req, res) => {
    const response = await AlarmeService.findAll(req.params.idPessoa)
    res.status(200).send(response)
})

export default router