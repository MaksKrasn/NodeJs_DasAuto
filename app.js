const config = require('./config')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const hbs = require('hbs')
const expressHbs = require('express-handlebars')
const homeRouter = require('./routes/home.routes')

app.set('view engine', 'hbs')

app.use('/', homeRouter)


mongoose.connect(config.dbUri, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    console.log('Success conect to DB');
})

app.listen(config.port, config.host, () => {
    console.log('Start server');
})