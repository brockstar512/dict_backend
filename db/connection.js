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
//mongodb+srv://dbadmin:dbadmin@cluster0-6a6h6.mongodb.net/test?retryWrites=true&w=majority
//dbadmin

module.exports = mongoose
