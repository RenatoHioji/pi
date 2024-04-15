import express from "express"
import AlarmeService from "./../service/AlarmeService.js"
import Alarme from "../model/Alarme.js"

const router = express.Router()

router.post("/api/alarme", async (req, res) => {
    const alarmeCriado = await AlarmeService.Create(
        req.body.id,
        req.body.acao,
        req.body.horario,
        req.body.diaDaSemana
    )
    console.log("CONTROLLER RETORNO -------", alarmeCriado)
    res.status(201).send(alarmeCriado) 
})

router.delete("/api/alarme", async(req, res) =>{
    AlarmeService.DeleteById(req.body.id)
    res.status(204).send()
})

export default router