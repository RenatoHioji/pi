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

const PORT = process.env.PORT || 3001
const MONGO_DB_URL = process.env.LOCAL_MONGO_DB_URL || process.env.DOCKER_MONGO_DB_URL

const app = express()

app.use(express.json())
app.use(cors({ origin: `http://localhost:${PORT}` }))
app.use(express.static('src/public'))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true 
}));


app.set("views", "./src/views/")
app.set("view engine", "ejs")

moongoose.connect("mongodb://localhost:27017/pi-pais")

//Rotas
app.use("/", PessoaController)
app.use("/", AlarmeController)
app.use("/", ListaController)
app.use("/", JogoController)
app.use("/", CategoriaController)
app.use("/", SubcategoriaController)
app.use("/", ItemController)

app.set("views", "./src/views/")
app.set("view engine", "ejs")


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

app.get("/meusCards", (req, res) => {
    res.render("meusCards")
})

app.get("/addCards", (req, res) => {
    res.render("addCards", {id: 10})
})

app.get("/listas", (req, res) => {
    res.render("listas")
})
app.get("/jogoDificuldade", (req, res) =>{
    res.render("jogoDificuldade")
})
app.listen(PORT, err => {
    try {
        console.log(`Server litening on http://localhost:${PORT}`)
    } catch(err){
        console.log(err)
    }
})