import 'dotenv/config'
import express from "express"
import moongoose from "mongoose"
import cors from "cors"
import multer from 'multer'
import session from 'express-session'
import AlarmeController from "./src/controllers/AlarmeController.js"
import PessoaController from './src/controllers/PessoaController.js'
import ListaController from "./src/controllers/ListaController.js"
const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json());
app.use(cors({ origin: `http://localhost:${PORT}` }))
app.use(express.static('src/public'))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

const upload = multer({dest:"public/uploads/"})
app.set("views", "./src/views/")
app.set("view engine", "ejs")

moongoose.connect(process.env.MONGODB_URI + process.env.DB)

//Rotas
app.use("/", PessoaController)
app.use("/", AlarmeController)
app.use("/", ListaController)
app.get("/", (req, res) => {
    res.render("splash")
})

app.get("/main", (req, res) => {
    res.render("main")
})

app.get("/rotina", (req, res) => {
    res.render("rotina")
})

app.listen(PORT, err => {
    try {
        console.log(`Server litening on http://localhost:${PORT}`)
    } catch(err){
        console.log(err)
    }
})