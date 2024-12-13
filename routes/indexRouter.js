const { Router } = require('express')

const indexRouter = Router()

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

//render index.ejs view
indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages })
}
)

//route for /message/:id
indexRouter.get("/message/:id", (req, res) => {
    const message = messages[req.params.id]
    res.render("message", { message: message })
}
)

module.exports = { indexRouter, messages }