import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
        const tweet = await tweetService.create(req.body);
        return res.status(201).json({
            message: 'Successfully created a new tweet',
            data: tweet,
            success: true,
            err: {}

        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong',
            err: error,
            success: false,
            data: {}

        });
    }
}

export const getTweet = async (req, res) => {
    try {
        const tweet = await tweetService.get(req.params.id);
        return res.status(200).json({
            message: 'Successfully fetched a tweet',
            data: tweet,
            success: true,
            err: {}

        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong',
            err: error,
            success: false,
            data: {}

        });
    }
}