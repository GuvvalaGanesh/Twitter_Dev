import LikeService from '../services/like-service.js';

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
    try {
        const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);
        return res.status(200).json({
            message: 'Successfully toggled like',
            data: response,
            success: true,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "something went wrong",
            err: error,
            success: false,
            data: {}
        })
    }
}