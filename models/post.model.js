const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const postSchema = new Schema({
    text: String,
    image: String,
    isText: { type: Boolean, default: true},
    user: { type: mongoose.Schema.Types.ObjectId, required: true},
    comments: [
        {
            user: {type: mongoose.Schema.Types.ObjectId, required: true},
            comment: {type: String, required: true}
        }
    ]
})

module.exports = mongoose.model('Post', postSchema)