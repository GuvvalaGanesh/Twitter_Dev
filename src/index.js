import express from 'express';
import { connect } from './config/database.js';
const app = express();

import TweetService from './services/tweet-service.js';

app.listen(3000, async() => {

    console.log('Server started');
    await connect();
    console.log('Mongodb connected');

    let service = new TweetService();
    await service.create({content: '#This is after #processing really #Excited, Lets #start doing #coding'});
});