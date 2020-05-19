const mongoose = require ('../db/connection')
const Schema = mongoose.Schema

const WordSchema = new Schema({
        word: String,
        notes: String,
        definitions: [
            {
            ref: 'Definition',
            type: mongoose.Schema.Types.ObjectId
            }
        ] 
})

const Word = mongoose.model('Words', WordSchema)
module.exports= Word
