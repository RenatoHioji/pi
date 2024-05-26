import express from "express"
import ListaService from "./../service/ListaService.js"
const router = express.Router()

router.get("/pessoa/:pessoaId/lista", async (req, res) =>{
    const response = await ListaService.findByPessoaId(req.params.pessoaId)
    res.status(200).send(response)
})
router.post("/pessoa/:pessoaId/lista", async(req, res)  =>{
    const response = await ListaService.save(req.params.pessoaId, req.body.nome)
    res.status(201).send(response)
})
router.put("/pessoa/:pessoaId/lista/:listaId", async(req, res) =>{
    const response =  await ListaService.update(req.params.pessoaId, req.params.listaId, req.body.nome)
    res.status(200).send(response)
})

router.delete("/pessoa/:pessoaId/lista/:listaId", async(req, res) =>{
    const response =  await ListaService.delete(req.params.pessoaId, req.params.listaId)
    res.status(204).send()
})

router.get("/pessoa/lista/:listaId", async(req, res) =>{
    const response = await ListaService.findListaById(req.params.listaId)
    res.status(200).send(response)
})


export default router