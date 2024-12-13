const { Router } = require("express");
const { messages } = require("./indexRouter")
const newMessageRouter = Router()

//render form.ejs
newMessageRouter.get("/", (req, res) => {
    res.render("form")
})

//handle form post request
newMessageRouter.post("/", (req, res) => {
    const { name, message } = req.body
    messages.push({ text: message, user: name, added: new Date() })
    res.redirect("/")
}
)
module.exports = newMessageRouter