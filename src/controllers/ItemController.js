
import ItemService from "./../service/ItemService.js"
import express from "express"
import { Item } from "./../models/Item.js"
import multer from 'multer'
import fs from "fs"
import sharp from "sharp"
import path from "path"
const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let uploadPath;
        if (file.fieldname === 'imagem') {
            uploadPath = path.join('src', 'public', 'uploads', 'imagens');
        } else if (file.fieldname === 'audio') {
            uploadPath = path.join('src', 'public', 'uploads', 'audios');
        } else if (file.fieldname === 'video') {
            uploadPath = path.join('src', 'public', 'uploads', 'videos');
        }

        uploadPath = uploadPath.replace(/\\/g, '/');

        fs.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage })
router.post("/categoria/:idCategoria/subcategoria/:idSubcategoria/item", upload.fields([{ name: "imagem" }, { name: "audio" }, { name: "video" }]), async (req, res) => {
    const imagens = req.files.imagem ? req.files.imagem.map(file => path.join('imagens', file.originalname)) : []
    const audio = req.files.audio ? path.join('audios', req.files.audio[0].originalname) : null
    const video = req.files.video ? path.join('videos', req.files.video[0].originalname) : null

    const item = new Item({
        nome,
        classificacao,
        divisaoSilabica,
        imagens,
        audio,
        video
    })


    const response = await ItemService.Create(
        req.params.idCategoria,
        req.params.idSubcategoria,
        item
    )
    res.status(201).send(response)
})


router.get("/categoria/subcategoria/:idSubcategoria/item", async (req, res) => {
    try {
        const response = await ItemService.findItemByCategoriaId(req.params.idSubcategoria)
        res.status(200).send(response)
    } catch (err) {
        console.log(`Não foi possível buscar os items da categoria: ${req.params.idSubcategoria}`)
    }
})



router.get("/categoria/subcategoria/item/:idItem", async (req, res) => {
    try {
        const response = await ItemService.findItemById(req.params.idItem)
        return res.status(200).send(response)
    } catch (err) {
        console.log(`Não foi possível buscar o item de id: ${req.params.idItem}`)
    }
})
router.get("/pessoa/item", async (req, res) => {
    try {
        const response = await ItemService.findByPessoaId(req.session.userId)
        res.status(200).render("meusCards", {
            cards: response
        })
    } catch (err) {
        return res.status(500).send("Não foi possível buscar os items dessa pessoa: " + err);
    }
});


router.post("/pessoa/item", upload.fields([{ name: "imagem" }, { name: "audio" }, { name: "video" }]), async (req, res) => {
    const nome = req.body.nome
    const angulo =parseInt(req.body.rotacao)
    const classificacao = req.body.classificacao
    const divisaoSilabica = req.body.divisaoSilabica
    const audio = req.files.audio ? path.join('audios', req.files.audio[0].originalname).replace(/\\/g, '/') : null
    const video = req.files.video ? path.join('videos', req.files.video[0].originalname).replace(/\\/g, '/') : null
    const imagens = req.files.imagem ? path.join('imagens', req.files.imagem[0].originalname).replace(/\\/g, '/') : null
    const imagePath = req.files.imagem[0].path;
    const rotatedImagePath = imagePath.replace(/imagens/, 'rotated')
    const originalFileName = path.basename(imagePath)
    console.log(angulo)
    
    rotateAndSave(imagePath, angulo, rotatedImagePath, originalFileName)
    const item = new Item({
        nome,
        classificacao,
        divisaoSilabica,
        audio,
        video,
    })
    const response = await ItemService.createItemToPessoa(req.session.userId, item, imagens)
    res.status(200).send(response)
})

async function rotateAndSave(imagePath, rotationAngle, outputFolderPath, outputFileName) {
    try {
        const image = sharp(imagePath);

        const metadata = await image.metadata();
        const width = metadata.width;
        const height = metadata.height;

        const centerX = width / 2;
        const centerY = height / 2;

        const rotationMatrix = [
            Math.cos(rotationAngle * Math.PI / 180),
            Math.sin(rotationAngle * Math.PI / 180),
            -Math.sin(rotationAngle * Math.PI / 180),
            Math.cos(rotationAngle * Math.PI / 180)
        ];

        const rotatedImageBuffer = await image
            .rotate(rotationMatrix, {
                center: { x: centerX, y: centerY },
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            })
            .toBuffer();

        const outputFile = path.join(outputFolderPath, outputFileName);
        await fs.promises.writeFile(outputFile, rotatedImageBuffer);
        console.log(`Rotated image saved to: ${outputFile}`);
    } catch (error) {
        console.error('Error rotating and saving image:', error);
        throw error;
    }
}

export default router