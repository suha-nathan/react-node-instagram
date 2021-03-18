require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
require("./lib/mongoose.config")

app.use(cors())
app.use(express.json())
app.use('/api', require('./routes/instagram.route'))


app.get("/", (req, res) => {

})

app.listen(process.env.PORT, () => {
    console.log(`running on ${process.env.PORT}`)
})