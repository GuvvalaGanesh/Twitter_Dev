import UserService from "../services/user-service.js";

const userService = new UserService();

export const signUp = async (req, res) => {
    try {
        const response = await userService.signUp({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(200).json({
            message: 'Successfully created a new user',
            data: response,
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