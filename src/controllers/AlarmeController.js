import express from "express"
import AlarmeService from "./../service/AlarmeService.js"


const router = express.Router()

router.post("/pessoa/:pessoaId/lista/:idLista/alarme", async (req, res) => {
    const response = await AlarmeService.Create(
        req.params.pessoaId,
        req.params.idLista,
        req.body.acao,
        req.body.horario,
        req.body.diaDaSemana,
        req.body.som
    )
    res.status(201).send(response) 
})

router.delete("/pessoa/:idPessoa/lista/:idLista/alarme/:idAlarme", async(req, res) =>{
    AlarmeService.DeleteById(req.params.idPessoa, req.params.idLista, req.params.idAlarme)
    res.status(204).send()
})

router.get("/lista/:idLista/alarme", async(req, res) => {
    const response = await AlarmeService.findAllByListaId(req.params.idLista)
    res.status(200).send(response)
})

router.get("/lista/:idLista/alarme/:idAlarme", async(req, res) =>{
    const response = await AlarmeService.findById(req.params.idAlarme)
    res.status(200).send(response)
})

router.put("/pessoa/:idPessoa/lista/:idLista/alarme/:idAlarme", async(req, res) =>{
    const response = await AlarmeService.update(
        req.params.idPessoa,
        req.params.idLista,
        req.params.idAlarme,
        req.body.acao,
        req.body.horario,
        req.body.diaDaSemana,
        req.body.som
    )
    res.status(200).send(response)
})

export default router