const express = require('express')
const mongoose = require('mongoose')
const itemRouter = require('./routes/items')

const app = express()
app.use(express.json())

//connecting to the mongoDb database
const url = "mongodb://localhost/kart"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
const con = mongoose.connection
con.on('open', function () {
    console.log('We are connected!')
})

//routes
app.use('/items', itemRouter)


//listening on to the server
app.listen(3000, () => {
    console.log('Express is listening')
})

