const express = require('express');
const connect = require('./config/database');
const app = express();

// const HashtagRepository = require('./repository/hashtag-repository');
const TweetService = require('./services/tweet-service');

app.listen(3000, async() => {

    console.log('Server started');
    await connect();
    console.log('Mongodb connected');

    /*const repo = new HashtagRepository();
    let response = await repo.findByName(['Trend','Java']);
    console.log(response);
    response = response.map(tags => tags.title);
    console.log(response);*/

    const repo = new TweetService();
    const tweet = await repo.create({
        content: 'This is after #processing really #Excited, Lets #start doing #coding'
    });
    console.log(tweet);
});