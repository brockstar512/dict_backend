const mongoose = require('./connection')
const Definition = require('../models/Definition')
const Word = require('../models/Word')





// Word.deleteMany().then(()=> Model.Word.create({

//     "definitions": [
//                 {

//                     "def": "the occurrence and development of events by chance in a happy or beneficial way.",
//                     "partOfSpeech": "noun",
//                     "sentence": "a fortunate stroke of serendipity"
//                 }
//             ],
//     "word": "serendipity",
//     "notes": "It's similar to coincidence",
// }).then(json => {console.log(json), process.exit()}))

Word.find({}).remove(() => {
    Definition.find({}).remove(() => {
let example = Word.create({
    word: "serendipity",
    notes: "It's similar to coincidence"
  }).then(word => {
    Promise.all([
      Definition.create({
        def: ["the occurrence and development of events by chance in a happy or beneficial way."],
        partOfSpeech: "noun",
      }).then(def => {
        word.definitions.push(def)
      })
    ]).then(() => {
        word.save()
    }).then(console.log("seeded"),()=> process.exit())
        })
    })
})
// def: ["the occurrence and development of events by chance in a happy or beneficial way."]