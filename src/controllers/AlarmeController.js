import express from "express"
import AlarmeService from "../service/AlarmeService.js"


const router = express.Router()

router.post("/api/alarme/:idPessoa", async (req, res) => {
    const response = await AlarmeService.Create(
        req.params.idPessoa,
        req.body.acao,
        req.body.horario,
        req.body.diaDaSemana
    )
    console.log("CONTROLLER RETORNO -------", response)
    res.status(201).send(response) 
})

router.delete("/api/alarme/:idAlarme", async(req, res) =>{
    AlarmeService.DeleteById(req.params.idAlarme)
    res.status(204).send()
})

router.get("/api/alarme/:idPessoa", async(req, res) => {
    const response = await AlarmeService.findAllByPessoaId(req.params.idPessoa)
    res.status(200).send(response)
})

router.put("/api/alarme/:idAlarme", async(req, res) =>{
    const response = await AlarmeService.update(
        req.params.idAlarme,
        req.body.acao,
        req.body.horario,
        req.body.diaDaSemana
    )
    res.status(200).send(response)
})

export default router