const {Server } = require("socket.io");
const http = require("http");
const express = require("express");

const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true
    }
});

const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap ={};

io.on('connection', (socket) =>{
    console.log('User connected:', socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != "undefined"){
        userSocketMap[userId] = socket.id;
    }

    //send events to all connected clients
    io.emit('getOnlineUsers', Object.keys(userSocketMap));


    //used to listen to the events both client nd server side
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
        delete userSocketMap[userId];
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    });
})

module.exports = {
    app ,
    io,
    server,
    getReceiverSocketId
}