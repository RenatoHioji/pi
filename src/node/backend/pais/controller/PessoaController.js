import express from "express"
import PessoaService from "./../service/PessoaService.js"


const router = express.Router()

router.post("/api/register", async (req, res) => {
    console.log("CONTROLLER ----" ,req.body)
    const response = await PessoaService.create(
        req.body.cpf,
        req.body.nome,
        req.body.email,
        req.body.senha,
        req.body.dtNasc
    )
    console.log("CONTROLLER RETORNO -------" , response)
    res.status(201).send(response)
})

router.post("/api/login", async(req, res) => {
    await PessoaService.login(
        req.body.cpf,
        req.body.senha
    ).then(token =>{
        if(token){
            console.log("TOKEN LOGIN")
            res.status(200).send({
                'token': token,
            })
        }else{
            res.status(404).send({
                error: "User Not Found"
            })
        }
    })
})

router.get("/api/perfil/:id", async (req, res) => {
    const response = await PessoaService.findById(req.params.id)
    res.status(200).send(response)
})

router.put("/api/perfil/:id", async (req, res)=>{
    const response = await PessoaService.update(
        req.params.id,
        req.body.cpf,
        req.body.nome,
        req.body.email,
        req.body.senha,
        req.body.dtNasc
    )
    res.status(200).send(response)
})

router.delete("/api/perfil/:id", async (req, res)=>{
    const response = await PessoaService.deleteById(req.params.id)
    res.status(200).send()
})

export default router