const express = require('express')
const PORT = process.env.PORT || 4000
const parser = require('body-parser')
const cors = require('cors')


const app = express()

// const dictListRouter = require('./routes/ the route')

app.use(parser.json())
app.use(cors())

// app.use('/api/wordList', dictListRouter)

app.get('/', (req,res)=>{
    res.send('the server is running')
})
// app.get('/', (req, res)=>{
//     res.redirect('route you want it to redirect to')
// })

app.listen(PORT, () => console.log('Server running on port:', PORT))