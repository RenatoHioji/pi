import express from "express"
import moongoose from "mongoose"
import LoginController from "./controller/LoginController.js"
const app = express()
moongoose.connect("mongodb://localhost:27017/pi-pais")

app.use("/", LoginController)

app.use(express.json());

app.listen(3000)
