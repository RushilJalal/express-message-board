const express = require('express')
const app = express()
const { indexRouter } = require("./routes/indexRouter")
const newMessageRouter = require("./routes/newMessageRouter")
const path = require("node:path")

//middleware to parse form data
app.use(express.urlencoded({ extended: true }))

//routes
app.use("/", indexRouter)
app.use("/new", newMessageRouter)

//view path, view engine config
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

//telling the app static assets are in 'public' folder
const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))


app.listen(3000)