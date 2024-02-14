const express = require('express');
const userRoutes = require('./routes/userRoutes');
// const productRoutes = require('./routes/productRoutes');
const app = express();

const port = 5000;

app.use(express.json);

app.use('/user', userRoutes);
// app.use('/product', productRoutes)

app.get('/', (req, res) => {
    res.json({"status":"up and running!"})
})

// two types of routes
// 1. users routes
// 2. products routes


app.listen(port, (err) => {
    if(!err)
        console.log('Server running on port: ', port);
})