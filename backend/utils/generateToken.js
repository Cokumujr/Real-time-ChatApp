const jwt = require('jsonwebtoken');

const generateTokenAndSetCookie =  (userId,res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
         expiresIn: '15d' });

         res.cookie('jwt', token, { 
            maxAge: 15 * 24 * 60 * 60 *1000, 
            secure: process.env.NODE_ENV === 'production',  // true for https
            httpOnly: true, //prevent xss attacks cross site scripting attacks
            samesite: "strict" // CSRF protection cross site request forgery attacks
        });
         
}

module.exports = generateTokenAndSetCookie;