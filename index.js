const express = require('express')
const PORT = process.env.PORT || 4000
const parser = require('body-parser')
const cors = require('cors')


const app = express()

const dictListRouter = require('./routes/routes')

app.use(parser.json())
app.use(cors())

//redirect server to routes where the data is stored
app.get('/', (req,res)=>{
    res.redirect('/routes')
})

//check if server is live
// app.get('/', (req,res)=>{
//     res.send('the server is running')
// })


app.use('/routes', dictListRouter)
//app use this route for these routers

app.listen(PORT, () => console.log('Server running on port:', PORT))
 
// app.listen(app.get("port"), () => {
//     console.log(`✅ PORT: ${app.get("port")} 🌟`);});