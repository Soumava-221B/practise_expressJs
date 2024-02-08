const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('public'));    // to use static page
const customMiddleware = (req, res,  next) => {
    req.custominfo = 20;
    console.log('you entered a middleware');
    next();
}

// app.use(customMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/shop', (req, res) => {
    console.log(req.query);   // http://localhost:5000/shop?product=shirts&price=1000
    res.send('welcome to the shop');
})

app.get('/users/:username', (req, res) => {
    console.log(req.params);   
    res.send('welcome to the user search');
})

app.get('/me', (req, res) => {
    // console.log(req.custominfo);
    res.sendFile(__dirname+"/index.html")
})

app.listen(port, (err) => {
    if(!err) {
        console.log(`Server is up and running on ${port}`)
    }
});