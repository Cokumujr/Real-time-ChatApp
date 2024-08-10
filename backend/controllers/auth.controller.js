const User = require('../models/user.model');
const bcrypt = require('bcryptjs'); 
const generateTokenAndSetCookie = require('../utils/generateToken');

const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;

        // Validate input fields
        if (!fullname ||!username ||!password ||!confirmPassword ||!gender) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        // Check if the username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        // Hash the password
        //const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate profile picture URL based on gender
        const profilePic = gender === 'male'
            ? `https://avatar.iran.liara.run/public/boy?username=${username}`
            : `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // Create a new user
        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilepic: profilePic,
        });
        if (newUser){
         //generate jwt token
         generateTokenAndSetCookie(newUser._id, res);   
            
        // Save the user to the database
        await newUser.save();

        // Respond with success
        res.status(201).json({
            message: 'User created successfully',
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            profilepic: newUser.profilepic,
            created_at: newUser.created_at
        });
        }else {
            res.status(400).json({ error: 'Invalid User data' });
        }

    } catch (error) {
        console.log("Error in signup process:", error.message);
        res.status(500).send({ message: "Internal server error" });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username});
        const passwordValid = await bcrypt.compare(password,user?.password|| '');

        if(!user||!passwordValid){
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        generateTokenAndSetCookie(user._id, res);

        res.json({
            message: 'Logged in successfully',
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilepic: user.profilepic
        
        });
        
    } catch (error) {
        console.log("Error in login process:", error.message);
        res.status(500).send({ error: "Internal server error" });
    }
}


const logout = async (req, res) => {
    try {
        res.cookie("jwt",' ', {maxAge: 0 });
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.log("Error in logout process:", error.message);
        res.status(500).send({ error: "Internal server error" });
    }
 
}




module.exports = {
    signup,
    login,
    logout
 };

