import SubcategoriaService from "./../service/SubcategoriaService.js"
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
//TELA DE SUBCATEGORIAS DA CATEGORIA
router.get("/categoria/:idCategoria/subcategoria", async(req, res) => {
    const response = await SubcategoriaService.findByCategoriaId(req.params.idCategoria)
    res.status(200).send(response)
})

router.post("/categoria/:idCategoria/subcategoria", upload.single("file"), async(req, res)=> {
    const imagens = req.files.imagem ? req.files.imagem.map(file => path.join('images', file.originalname)) : []
    const response = await SubcategoriaService.save(req.params.idCategoria, req.body.nome, imagens)
    res.status(201).send(response)
})



export default router