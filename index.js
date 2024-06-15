import 'dotenv/config'
import express from "express"
import moongoose from "mongoose"
import cors from "cors"
import session from 'express-session'
import AlarmeController from "./src/controllers/AlarmeController.js"
import PessoaController from './src/controllers/PessoaController.js'
import ListaController from "./src/controllers/ListaController.js"
import JogoController from "./src/controllers/JogoController.js"
import CategoriaController from "./src/controllers/CategoriaController.js"
import SubcategoriaController from "./src/controllers/SubcategoriaController.js"
import ItemController from "./src/controllers/ItemController.js"
import { Pessoa } from './src/models/Pessoa.js'
const PORT = process.env.PORT || 3001
const MONGO_DB_URL = process.env.MONGO_DB_URL

const app = express()
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors({ origin: `http://localhost:${PORT}` }))
app.use(express.static('src/public'))
app.use(session({
    secret: 'tagarela',
    resave: false,
    saveUninitialized: true,
  }))
  
  async function sessionInitializer(req, res, next) {
    if (!req.session.userId) {
        const pessoa = await Pessoa.findOne()
        const id = pessoa.id
        req.session.userId = id
    }
    next()
  }
app.use(sessionInitializer)
app.set("views", "./src/views/")
app.set("view engine", "ejs")

moongoose.connect(MONGO_DB_URL + process.env.DB)

app.get("/", (req, res) => {
    res.render("splash")
})

app.get("/main", (req, res) => {
    res.render("main")
})

app.get("/rotina", (req, res) => {
    res.render("rotina")
})

app.get("/necessidades", (req, res) => {
    res.render("necessidades")
})

app.get("/alimentos", (req, res) => {
    res.render("alimentos")
})

app.get("/addCards", (req, res) => {
    res.render("addCards")
})

app.get("/addAlarme/:id?", (req, res) => {
    console.log( req.query.id)
    res.render("addAlarme", {
        id: req.query.id
    })
})

app.get("/praticar", (req, res) => {
    res.render("praticar")
})

app.get("/quiz", (req, res) => {
    res.render("quiz")
})
app.get("/quiz1", (req, res) => {
    res.render("quiz1")
})
app.get("/quiz2", (req, res) => {
    res.render("quiz2")
})

app.get("/quiz3", (req, res) => {
    res.render("quiz3")
})

app.get("/parabens", (req, res) => {
    res.render("parabens")
})

app.get("/emocoes", (req, res) => {
    res.render("emocoes")
})

app.use("/", PessoaController)
app.use("/", AlarmeController)
app.use("/", ListaController)
app.use("/", JogoController)
app.use("/", CategoriaController)
app.use("/", SubcategoriaController)
app.use("/", ItemController)

app.listen(PORT, err => {
    try {
        console.log("Iniciado: ")
    } catch(err){
        console.log(err)
    }
})



  