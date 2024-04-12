import express from "express"
import PessoaService from "./../service/PessoaService.js"

const router = express.Router()

router.post("/api/register", async (req, res) => {
    console.log("CONTROLLER ----" ,req.body)
    const pessoaCriada = await PessoaService.Create(
        req.body.cpf,
        req.body.nome,
        req.body.email,
        req.body.senha,
        req.body.dtNasc
    )
    console.log("CONTROLLER RETORNO -------" ,pessoaCriada)
    res.status(201).send(pessoaCriada)
})

router.post("/api/login", async(req, res) => {
    const perfil =  await PessoaService.Login(
        req.body.cpf,
        req.body.senha
    )   
    res.status(200).send()
})

router.post("/api/perfil", async (req, res) => {
    const perfil = await PessoaService.Perfil(req.body.id)
    res.status(200).send(perfil)
})



export default router