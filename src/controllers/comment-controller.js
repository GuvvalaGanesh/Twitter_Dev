import CommentService from '../services/comment-service.js';

const commentService = new CommentService();

export const createComment = async (req, res) => {
    try {
        const response = await commentService.create(req.query.modelId, req.query.modelType, req.user.id, req.body.content);
        return res.status(200).json({
            message: 'Successfully create a comment',
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