import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
    try{
        const { username, email, password } = req.body;

        // Check if the user already exists
        const userExists = await User.findOne({ username });
        if(userExists){
            return res.status(400).json({ error: 'User already exists' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ username, email, password: hashedPassword});
        await newUser.save();

        res.status(201).json({ 
            _id : newUser._id,
            username: newUser.username,
            email: newUser.email,
            message: 'User created successfully' 
        });

    }catch(error){
        console.log(error);
    }
}

export const login = (req,res) => {
    res.send('Login route');
}

export const logout = (req,res) => {
    res.send('Logout route');
}
