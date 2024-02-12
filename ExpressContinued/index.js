const express = require('express');
const app = express();

const port = 5000;

app.get('/', (req, res) => {
    
})


// two types of routes
// 1. users routes
// 2. products routes


app.listen(port, (err) => {
    if(!err)
        console.log('Server running on port: ', port);
})