require('dotenv').config();

const fs = require('fs')
const path = require('path')
const express = require("express");
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./models/config/db');

const app = express();

connectDB();

//
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Configura motor EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//Middleware EJS para layouts, obrigatoriamente deve ser antes das rotas
app.use(expressLayout);
app.set('layout', path.join(__dirname, 'views', 'layouts', 'main'));

//Declarando a pasta publica para o express
app.use(express.static(path.join(__dirname, 'public')))

fs.readdirSync(path.join(__dirname, 'routes')).forEach((file) => {
    console.log(file);
    const router = require(path.join(__dirname, 'routes', file));
    app.use('/', router);
});

app.listen(process.env.PORT, () => {
    console.log(`app it's running on http://localhost:${process.env.PORT}`);
});