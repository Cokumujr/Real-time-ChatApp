const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');


const authRoutes = require('./routes/auth.routes');
const messageRoutes = require('./routes/message.routes');
const userRoutes = require('./routes/user.routes');

const connectdb = require('./db/connectdb');
const { app, server } = require('./socket/socketio');


const PORT = process.env.PORT || 5000;

dotenv.config();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Routes


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


// Adjust the path to point to the correct location of your frontend build
const frontendBuildPath = path.join(__dirname, '..', 'frontend', 'dist');

// Serve static files from the frontend build directory
app.use(express.static(frontendBuildPath));


app.get("/ping", async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.status(200).json({ message: " Pong! MongoDB is awake." });
  } catch (err) {
    console.error("Ping failed:", err);
    res.status(500).json({ message: " Ping failed", error: err.message });
  }
});

// Handle other routes
app.get('*', (req, res) => {
  console.log('Serving index.html');
  res.sendFile(path.join(frontendBuildPath, 'index.html'));
});

// Log the paths for debugging
console.log('Static files path:', frontendBuildPath);
console.log('Index.html path:', path.join(frontendBuildPath, 'index.html'));

// start server
server.listen(PORT, () => {
  connectdb();
  console.log(`Server running on port ${PORT}`);

  // self-ping 
  setInterval(async () => {
    if (mongoose.connection.readyState === 1) {
      try {
        await mongoose.connection.db.admin().ping();
      } catch (e) {
        console.error("Self ping error:", e?.message);
      }
    }
  }, 5 * 60 * 1000);
});
