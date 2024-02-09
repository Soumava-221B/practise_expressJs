const express = require('express')
const app = express()    //instantiated express
const port = 5000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // console.log(__dirname)
    // res.sendFile(__dirname + '/welcome.ejs')
    res.render('welcome.ejs', { user: "Soumava" })
})

app.get('/users', (req, res) => {
    console.log('inside users controllers')
    res.send('Hello users')
})

app.get('/status', (req, res) => {
    // console.log('inside users controllers')
    res.json({status: "up and running"})
})

app.listen(port, () => {                                  //this works as an callback and error handling
    console.log(`App listening on port ${port}`)
})