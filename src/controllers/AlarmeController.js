import express from "express"
import AlarmeService from "./../service/AlarmeService.js"

import multer from 'multer'
import path from "path"
const router = express.Router()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let uploadPath
        if (file.fieldname === 'imagem') {
            uploadPath = path.join('src', 'public', 'uploads', 'imagens')
        } else if (file.fieldname === 'audio') {
            uploadPath = path.join('src', 'public', 'uploads', 'audios')
        } else if (file.fieldname === 'video') {
            uploadPath = path.join('src','public', 'uploads', 'videos')
        }
        uploadPath = uploadPath.replace(/\\/g, '/');        
        cb(null, uploadPath)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

router.post("/pessoa/lista/:idLista/alarme",upload.single("file"), async (req, res) => {
    const diasDaSemana = req.body.dias || []; 
    const som = req.file ? path.join('audios', req.file.originalname) : null;
    const response = await AlarmeService.Create(
        req.session.userId,
        req.params.idLista,
        req.body.acao,
        req.body.horario,
        diasDaSemana,
        som
    )
    res.status(201).redirect(`/pessoa/lista/${req.params.idLista}`) 
})

router.get("/pessoa/lista/:idLista/alarme/:idAlarme/delete", async(req, res) =>{
    await AlarmeService.DeleteById(req.session.userId, req.params.idLista, req.params.idAlarme)
    res.status(204).redirect(`/pessoa/lista/${req.params.idLista}`)
})

router.get("/lista/:idLista/alarme", async(req, res) => {
    const response = await AlarmeService.findAllByListaId(req.params.idLista)
    res.status(200).send(response)
})

router.get("/lista/:idLista/alarme/:idAlarme", async(req, res) =>{
    const response = await AlarmeService.findById(req.params.idAlarme)
    res.status(200).render("editar_alarme", {
        "alarme": response, "listaId": req.params.idLista
    })
})

router.post("/pessoa/lista/:idLista/alarme/:idAlarme/update", async(req, res) =>{
    const diasDaSemana = req.body.dias || []; 
    const som = req.file ? path.join('audios', req.file.originalname) : null;
    const response = await AlarmeService.update(
        req.session.userId,
        req.params.idLista,
        req.params.idAlarme,
        req.body.acao,
        req.body.horario,
        diasDaSemana,
        som,
    )
    console.log(response)
    res.status(200).redirect(`/pessoa/lista/${req.params.idLista}`)
})

export default router