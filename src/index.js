const express = require('express');
const mongoose = require('mongoose');
const ServerConfig = require('./config');


const app = express();
PORT = 3000
app.listen(3000, async()=>{
    console.log(`Server started at : ${PORT}`);

    // mongoose.connect('')

})