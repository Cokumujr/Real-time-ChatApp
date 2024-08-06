const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');


const authRoutes = require('./routes/auth.routes');
const messageRoutes = require('./routes/message.routes');
const userRoutes = require('./routes/user.routes');

const connectdb = require('./db/connectdb'); 

const app = express();
const PORT = 5000;

dotenv.config();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes


app.use ("/api/auth", authRoutes);
app.use ("/api/messages", messageRoutes);
app.use ("/api/users", userRoutes);


//app.get('/', (req, res) => {
 //   res.send("Welcome to my application");
//});

// start server
app.listen(PORT, () => {
    connectdb(); 
    console.log(`Server running on port ${PORT}`);
});
