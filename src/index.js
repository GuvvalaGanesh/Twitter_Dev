const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000, async() => {

    console.log('Server started');
    await connect();
    console.log('Mongodb connected');

    const tweetRepo = new TweetRepository();

    // const tweet = await tweetRepo.create({content: 'Tweet with comment schema'});
    // console.log(tweet);
    // const comment = await Comment.create({content: 'New comment'});
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);

    const tweet = await tweetRepo.getWithComments('661a2c7551c07b285b9b1685');
    console.log(tweet);

});