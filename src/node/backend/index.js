import express from "express"
import moongoose from "mongoose"
import session from "express-session"

import multer from "multer"

import LoginController from "./pais/controller/PessoaController.js"
import AlarmeController from "./pais/controller/AlarmeController.js"
import cors from "cors"
const app = express()
//Conexão
moongoose.connect("mongodb://localhost:27017/pi-pais")

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3001"
}))

app.use(session({
    secret: 'pi-dsm3', 
    resave: false,
    saveUninitialized: true
  }));
const upload = multer({dest:"public/uploads/"})


//Rotas
app.use("/", LoginController)
app.use("/", AlarmeController)

app.listen(3000, err =>{
    try{
    console.log("Server Iniciado")
    }catch(err){
       console.log(err)
    }
})