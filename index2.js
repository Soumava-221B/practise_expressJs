const express = require('express');
const app = express();
const port = 5000;

const customMiddleware = (req, res,  next) => {
    req.custominfo = 20;
    console.log('you entered a middleware');
    next();
}

app.use(customMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/me', customMiddleware, (req, res) => {
    console.log(req.custominfo);
    res.sendFile(__dirname+"/index.html")
})

app.listen(port, (err) => {
    if(!err) {
        console.log(`Server is up and running on ${port}`)
    }
});