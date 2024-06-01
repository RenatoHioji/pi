import 'dotenv/config'
import express from "express"
import moongoose from "mongoose"
import cors from "cors"

const PORT = process.env.PORT || 3001
const MONGO_DB_URL = process.env.LOCAL_MONGO_DB_URL || process.env.DOCKER_MONGO_DB_URL

const app = express()
app.use(express.json());
app.use(cors({ origin: `http://localhost:${PORT}` }))
app.use(express.static('src/public'))

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

app.get("/meusCards", (req, res) => {
    res.render("meusCards")
})

app.get("/addCards", (req, res) => {
    res.render("addCards")
})

app.get("/listas", (req, res) => {
    res.render("listas")
})

app.get("/listas_fimDeSemana", (req, res) => {
    res.render("listas_fim")
})

app.get("/addList", (req, res) => {
    res.render("addList")
})

app.get("/dias_da_semana", (req, res) => {
    res.render("dias_da_semana")
})

app.get("/praticar", (req, res) => {
    res.render("praticar")
})

app.get("/quiz", (req, res) => {
    res.render("quiz")
})

app.get("/parabens", (req, res) => {
    res.render("parabens")
})

app.listen(PORT, err => {
    try {
        console.log(`Server litening on http://localhost:${PORT}`)
    } catch(err){
        console.log(err)
    }
})