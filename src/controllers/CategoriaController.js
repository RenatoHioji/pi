
import CategoriaService from "./../service//CategoriaService.js"
import express from "express"
import multer from 'multer'

const router = express.Router()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let uploadPath
        if (file.fieldname === 'imagem') {
            uploadPath = path.join('public', 'uploads', 'images')
        } else if (file.fieldname === 'audio') {
            uploadPath = path.join('public', 'uploads', 'audios')
        } else if (file.fieldname === 'video') {
            uploadPath = path.join('public', 'uploads', 'videos')
        }
        cb(null, uploadPath)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })
//TELA DAS CATEGORIAS
router.get("/categoria", async(req, res) => {
    const response = await CategoriaService.findAll()
    res.status(200).send(response)
})

router.post("/categoria", upload.single("file"), async(req, res) =>{
    const imagens = req.files.imagem ? req.files.imagem.map(file => path.join('images', file.originalname)) : []
    const response = await CategoriaService.save(req.body.nome, imagens)
    res.status(201).send(response)
})


export default router