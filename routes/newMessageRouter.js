const { Router } = require("express");
const pool = require("../db/config");
const newMessageRouter = Router()
const moment = require("moment-timezone")
const { body, validationResult } = require("express-validator")

//render form.ejs
newMessageRouter.get("/", (req, res) => {
    res.render("form")
})

//handle form post request and insert into db
newMessageRouter.post("/", [
    body('name').trim().escape().notEmpty().withMessage('Name is required'),
    body('message').trim().escape().notEmpty().withMessage('Message is required')
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).render('form', { errors: errors.array() })
    }
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