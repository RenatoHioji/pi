import express from "express"
import moongoose from "mongoose"
import LoginController from "./pais/controller/PessoaController.js"
const app = express()
moongoose.connect("mongodb://localhost:27017/pi-pais")
app.use(express.json());

app.use("/", LoginController)


app.listen(3000, err =>{
    try{
    console.log("Server Iniciado")
    }catch(err){
       console.log(err)
    }
})