import express from "express"
import JogoService from "./../service/JogoService.js"
const router = express.Router()

router.get("/jogo", async(req, res) => {
    //res.render(tela de seleção de dificuldade)
})


router.get("/jogo/:dificuldade", async(req, res) => {
    const response = await JogoService.findByDificuldade(req.params.dificuldade)
    req.session.jogo = response
    res.status(200).redirect("/jogo/fase/1")
})
router.get("/jogo/fase/:numero", async(req, res)=>{
    const jogo = req.session.jogo
    const response = jogo[req.params.numero]
    res.status(200).send(response)

})
export default router