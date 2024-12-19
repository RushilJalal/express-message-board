const { Router } = require("express");
const pool = require("../db/config");
const newMessageRouter = Router()
const moment = require("moment-timezone")

//render form.ejs
newMessageRouter.get("/", (req, res) => {
    res.render("form")
})

//handle form post request and insert into db
newMessageRouter.post("/", async (req, res) => {
    const { name, message } = req.body
    const indiaTime = moment().tz("Asia/Kolkata").format();

    try {
        await pool.query('insert into messages (text,"user",added) values ($1,$2,$3)', [message, name, indiaTime])
        res.redirect("/")
    } catch (error) {
        console.error(error)
        res.send(error)
    }
}
)
module.exports = newMessageRouter