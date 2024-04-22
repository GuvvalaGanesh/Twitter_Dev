import { TweetRepository, HashtagRepository } from '../repository/index.js';

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1).toLowerCase()); // this extracts hashtags
        // console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        // console.log(alreadyPresentTags);
        let titleOfPresentTags = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]}
        });
        await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        })
        // console.log(response);

        // [excited, coding, js, virat] --> [excited, virat]
        // todo create hashtags and add here
        /**
         * 1. bulkcreate in mongoose is done by "insertMany" function
         * 2. Filter title of hashtag based on multiple tags
         * 3. How to add tweet_id inside all the hashtags
         */
        return tweet;
    }

}

export default TweetService;