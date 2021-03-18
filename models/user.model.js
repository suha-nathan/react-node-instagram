const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    apiKey: String,
    userInfo: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
    },
    description: String,
    photo: String,
    posts: [ { type: mongoose.Schema.Types.ObjectId }],
    followers: [ { type: mongoose.Schema.Types.ObjectId }]

})


module.exports = mongoose.model('User', userSchema)