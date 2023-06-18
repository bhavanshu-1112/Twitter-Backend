import express from 'express';
// const mongoose = require('mongoose');
// const ServerConfig = require('./config');
import DataBaseConfig from './config';
import Tweet from './models/tweet-model.js';





const app = express();
PORT = 3000
app.listen(3000, async()=>{
    console.log(`Server started at : ${PORT}`);

    // mongodb connection established
    DataBaseConfig.connect();
    console.log('MongoDB connected');

    // create a schemaa
    // create a model
    // create a document

    Tweet.create({
          content : 'This is my first tweet',
          likes : 23,
          noOfReweets : 3,
          comment : 'This is my first comment'

    })

})