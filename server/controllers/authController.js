import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import generateToken from "../utils/GenerateJWToken.js";

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
        generateToken(newUser._id,res);
        await newUser.save();

        res.status(201).json({ 
            _id : newUser._id,
            username: newUser.username,
            email: newUser.email,
            message: 'User created successfully' 
        });

    }catch(error){
        console.log("Error in Signup Controller",e);
        res.status(500).json({error: 'Internal server error'});
    }
}

export const login = async (req,res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordMatch = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordMatch){
            return res.status(400).json({error: 'Invalid username or password'});
        }
        generateToken(user._id,res);
        res.status(200).json({
            _id : user._id,
            username: user.username,
            email: user.email,
            message: 'Login successful'
        });
    }catch(e){
        console.log("Error in Login Controller",e);
        res.status(500).json({error: 'Internal server error'});
    }
}

export const logout = async (req,res) => {
    try{
        res.cookie('jwt', '', {maxAge: 0});
        res.status(200).json({message: 'Logout successful'});
    }catch(e){
        console.log("Error in Logout Controller",e);
        res.status(500).json({error: 'Internal server error'});
    }
}
