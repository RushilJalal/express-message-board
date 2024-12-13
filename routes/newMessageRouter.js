const { Router } = require("express");

const newMessageRouter = Router()

//render form.ejs
newMessageRouter.get("/", (req, res) => {
    res.render("form")
})

//handle form post request
newMessageRouter.post("/", (req, res) => {
    const { name, message } = req.body
    
}
)
module.exports = newMessageRouter