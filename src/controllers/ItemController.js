
import ItemService from "./../service/ItemService.js"
import express from "express"
import { Item } from "./../models/Item.js"
import multer from 'multer'
import fs from "fs"
import sharp from "sharp"

import path from "path"
import { createCanvas, loadImage } from 'canvas'; 
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
    const nome = req.body.nome;
    const angulo = parseInt(req.body.rotacao);
    const classificacao = req.body.classificacao;
    const divisaoSilabica = req.body.divisaoSilabica;
    const audio = req.files.audio ? path.join('audios', req.files.audio[0].originalname).replace(/\\/g, '/') : null;
    const video = req.files.video ? path.join('videos', req.files.video[0].originalname).replace(/\\/g, '/') : null;
    const imagens = req.files.imagem ? path.join('src', 'public', 'uploads', 'imagens', req.files.imagem[0].originalname).replace(/\\/g, '/') : null;
    const originalFileName = req.files.imagem[0].originalname;
    const rotatedImagePath = path.join('src', 'public', 'uploads', 'rotated', originalFileName).replace(/\\/g, '/');
    const relativeRotatedImagePath = path.join('rotated', originalFileName).replace(/\\/g, '/');
    try {
        await rotateAndSaveImage(imagens, rotatedImagePath, angulo);
        const item = new Item({
            nome,
            classificacao,
            divisaoSilabica,
            audio,
            video
        });

        const response = await ItemService.createItemToPessoa(req.session.userId, item, relativeRotatedImagePath);
        res.status(200).redirect("/pessoa/item");
    } catch (err) {
        console.error(`Error processing item: ${err}`);
        res.status(500).send("Internal server error");
    }
})
async function rotateAndSaveImage(imagens, rotatedImagePath, angulo) {
    try {
        const img = await loadImage(imagens);
        const canvas = createCanvas(img.width, img.height);
        const ctx = canvas.getContext('2d');
        ctx.translate(img.width / 2, img.height / 2);
        ctx.rotate((angulo * Math.PI) / 180);
        ctx.drawImage(img, -img.width / 2, -img.height / 2);
        const buffer = canvas.toBuffer('image/png');
        await fs.promises.writeFile(rotatedImagePath, buffer);
        console.log('Image rotated and saved successfully');
    } catch (err) {
        console.error('Error rotating and saving image:', err);
        throw err;
    }
}

export default router