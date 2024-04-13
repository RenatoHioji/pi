import express from "express"
import AlarmeService from "./../service/AlarmeService.js"

const router = express.Router()

router.post("/api/alarme", async (req, res) => {
    console.log("CONTROLLER ----" ,req.body)
    const alarmeCriado = await AlarmeService.Create(
        req.body.id,
        req.body.acao,
        req.body.horario,
        req.body.diaDaSemana
    )
    console.log("CONTROLLER RETORNO -------", alarmeCriado)
    res.status(201).send(alarmeCriado) 
})

export default router