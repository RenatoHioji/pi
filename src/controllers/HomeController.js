import express from "express"

const router = express.Router()

router.get("/api", (req, res) =>{
    res.render("home")

})

router.get("/api/pais", (req, res)=>{
    res.render("homepais")
})