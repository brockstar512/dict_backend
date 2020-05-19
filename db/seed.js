const Model = reqiure('../models/words')
const mongoose = require('./connection')


Model.Word.deleteMany().then(()=> Model.Word.create({

    "definitions": [
                {

                    "def": "the occurrence and development of events by chance in a happy or beneficial way.",
                    "partOfSpeech": "noun",
                    "sentence": "a fortunate stroke of serendipity"
                }
            ],
    "word": "serendipity",
    "notes": "It's similar to coincidence",
}).then(json => {console.log(json), process.exit()}))


