import express from "express"
import ListaService from "./../service/ListaService.js"
const router = express.Router()

router.get("/pessoa/listas", async (req, res) =>{
    const response = await ListaService.findByPessoaId(req.session.userId)
    res.status(200).render("listas", {
        listas: response
    })
})
router.post("/pessoa/lista", async(req, res)  =>{
    const response = await ListaService.save(req.session.userId, req.body.nome)
    res.status(201).redirect("/pessoa/listas")
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
    console.log(req.params.listaId)
    const response = await ListaService.findListaById(req.params.listaId)
    res.status(200).render("lista_alarmes", {
        lista: response
    })
})


export default router