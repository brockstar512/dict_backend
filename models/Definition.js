const mongoose = require('../db/connection')
const Schema = mongoose.Schema



const DefinitionSchema = new Schema({
    def: [String],
    partOfSpeech: String,
    sentence: String,
})

//export model
const Definition = mongoose.model('Definition', DefinitionSchema)
module.exports = Definition

