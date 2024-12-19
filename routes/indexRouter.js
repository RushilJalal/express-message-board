const { Router } = require('express')
const indexRouter = Router()
const pool = require("../db/config")

//render index.ejs view by querying from postgres db
indexRouter.get("/", async (req, res) => {
    try {
        const result = await pool.query("select * from messages")
        const messages = result.rows
        res.render("index", { messages: messages })
    } catch (error) {
        console.error(error)
        res.send("Error: " + error)
    }
}
)

//route to show a specific message
indexRouter.get("/message/:id", async (req, res) => {
    try {
        const result = await pool.query("select * from messages where id = $1", [req.params.id])
        const message = result.rows[0]
        res.render("message", { message: message })
    } catch (error) {
        console.error(error)
        res.send("Error: " + error)
    }
}
)

module.exports = { indexRouter }