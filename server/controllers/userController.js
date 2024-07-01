import User from '../models/userModel.js';

export const getUsers = async (req, res) => {
    try { 
        const id = req.user._id;
        const users = await User.find({ _id: { $ne: id } }).select('-password');
        // console.log(users);
        res.status(200).json(users);
    } catch (error) {
        console.log("Error in getUsers Controller", error);
        res.status(500).json({ error: 'Internal server error' });
    }
}