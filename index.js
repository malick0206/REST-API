require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

mongoose
.connect(process.env.DB_URL)
.then(()=> console.log('Succes'))
.catch((error) => console.error('erreur de connection')
);
const routes = require('./Routes/Router')
app.use(express.json())
app.use('/', routes);










app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})