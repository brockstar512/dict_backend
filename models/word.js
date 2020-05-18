const mongoose = require ('../db/connection')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
        Song: String,
        Artist: String,
        Album: String,
        Preview: String
})

const Item = mongoose.model('Songs', ItemSchema)
module.exports= Item
