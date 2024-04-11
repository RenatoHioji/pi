import express from "express"
import LoginService from "../service/LoginService.js"

const router = express.Router()

router.post("/api/register", (req, res) => {
    LoginService.Create(
        req.body.cpf,
        req.body.nome,
        req.body.email,
        req.body.senha,
        req.body.dtNasc
    )
    res.status(201).send()
})

router.post("/api/login", (req, res) => {
    LoginService.Login(
        req.body.cpf,
        req.body.senha
    )
})

router.get("/api/perfil", (req, res) => {
    LoginService.Perfil();
})



export default router