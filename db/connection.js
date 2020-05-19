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
// mongoose.connect(mongoURI, {useNewUrlParser: true})
//     .then(instance => {
//         console.log(`connected to db: `)
//     }).catch(error => {
//         console.log('connection failed', error)
//     })


module.exports = mongoose

//mongodb+srv://marshallbrock:brockstar93@cluster0-dl8yi.mongodb.net/test?retryWrites=true&w=majority
//run this in terminal 
//heroku config:set DB_URL="mongodb+srv://marshallbrock:brockstar93@cluster0-dl8yi.mongodb.net/test?retryWrites=true&w=majority" 