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

router.post("/api/login", (req, res) => {
    PessoaService.Login(
        req.body.cpf,
        req.body.senha
    )
})

router.get("/api/perfil", (req, res) => {
    PessoaService.Perfil();
})



export default router