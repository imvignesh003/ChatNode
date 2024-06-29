import jwt from 'jsonwebtoken';
import User from '../../models/userModel.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error: 'Unauthorized token not found'});
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(!verified){
            return res.status(401).json({error: 'Unauthorized token not verified'});
        }
        const userVerified = await User.findById(verified.userId).select('-password');
        if(!userVerified){
            return res.status(401).json({error: 'Unauthorized user not found'});
        }
        req.user = userVerified;

        next();

    } catch (error) {
        console.log("Error in protectRoute middleware", error);
        res.status(401).json({error: 'Unauthorized token not verified -- catch block'});
    }
}

export default protectRoute;