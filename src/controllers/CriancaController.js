import express from "express"
import Crianca from "./../models/Crianca.js"
const router = express.Router()

router.get("/api/crianca/perfil/:idCrianca", async (req, res) =>{
    const response = await Crianca.findById(req.params.idCrianca)
    res.status(200).send(response)
})