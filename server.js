require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')
const methodOverride = require('method-override')
const app = express()

//INIT MONGODB
require("./lib/mongoose.config")

//MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))


app.use(function(req,res,next){
    res.locals.currentUser = req.user
    next()


//ROUTES
app.use("/api",require("./routes/auth.route"))
// app.use("/", checkStatus, require('./routes/instagram.route'))
app.use('/api', require('./routes/instagram.route'))


app.listen(process.env.PORT, () => {
    console.log(`running on ${process.env.PORT}`)
})