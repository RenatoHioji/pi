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

app.listen(PORT, err => {
    try {
        console.log(`Server litening on http://localhost:${PORT}`)
    } catch(err){
        console.log(err)
    }
})