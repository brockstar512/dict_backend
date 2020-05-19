const mongoose = require('mongoose');
mongoose.Promise = Promise




let mongoURI = ''
if(process.env.NODE_ENV === 'production') {
    mongoURI = process.env.DB_URL
} else {
    mongoURI = "mongodb://localhost/favorite_words"
    //local db called favorite words
}



mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(instance => {
        console.log(`connected to db: `,mongoURI)
    }).catch(error => {
        console.log('connection failed', error)
    })


//brockstar93
// heroku config:set DB_URL= mongodb+srv://marshallbrock:brockstar93@dictionary-v2jqf.mongodb.net/test?retryWrites=true&w=majority
//mongoURI
//heroku config:set DB_URL="mongodb+srv://marshallbrock:brockstar93@dictionary-v2jqf.mongodb.net/test?retryWrites=true&w=majority"

module.exports = mongoose
