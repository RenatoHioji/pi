
import ItemService from "./../service/ItemService"
import express from "express"

const router = express.Router()

router.post("/api/item", async (req, res) => {
    const response = await ItemService.Create(
        req.body.nome,
        req.body.video,
        req.body.classificacao,
        req.body.categoria,
        req.body.imagem
    )
    console.log("CONTROLLER RETORNO -------", response)
    res.status(201).send(response) 
})

router.delete("/api/alarme/:idAlarme", async(req, res) =>{
    ItemService.DeleteById(req.params.idAlarme)
    res.status(204).send()
})

router.get("/api/alarme/:idPessoa", async(req, res) => {
    const response = await ItemService.findAllByPessoaId(req.params.idPessoa)
    res.status(200).send(response)
})

router.put("/api/alarme/:idAlarme", async(req, res) =>{
    const response = await ItemService.update(
        req.params.idAlarme,
        req.body.acao,
        req.body.horario,
        req.body.diaDaSemana
    )
    res.status(200).send(response)
})

export default router