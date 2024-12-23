const { Router } = require('express');
const indexRouter = Router();
const pool = require("../db/config");

// Render index.ejs view by querying from postgres db
indexRouter.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM messages");
        const messages = result.rows;
        res.render("index", { messages: messages });
    } catch (error) {
        console.error(error);
        res.send(error);
    }
});

// Route to show a specific message
indexRouter.get("/message/:id", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM messages WHERE id = $1", [req.params.id]);
        const message = result.rows[0];
        res.render("message", { message: message });
    } catch (error) {
        console.error(error);
        res.send(error);
    }
});

module.exports = { indexRouter };