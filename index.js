// importing necessary packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require("./routes");

const port = process.env.PORT || 3000;
const uri = "mongodb+srv://Diksha:sdoshi983@cluster0.ztu9k.mongodb.net/Bank?retryWrites=true&w=majority";
const local = "mongodb://localhost:27017/bank";
mongoose.connect(uri, {useNewUrlParser: true}).then(() => { // if connected successfully
    console.log('db connected ..'); 

    var app = express(); // initializing our app
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(routes);

    app.get('/', (request, response) => {
        response.sendFile('index.html',{root:__dirname});
    })
    
    app.listen(port, () => {    // starting server
        console.log('server started');
    });
    

}).catch((e) => {   // else catch the error, i.e. exception handling
    console.log(e.toString());
})