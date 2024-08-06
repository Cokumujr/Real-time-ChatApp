const Conversation = require("../models/conversation.model");
const Message = require("../models/message.model");


const sendMessage = async (req,res) => {

    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

    let conversation = await Conversation.findOne({
        participants:{ $all:[senderId, receiverId] }
    });

    if(!conversation){
        conversation = await Conversation.create({
            participants: [senderId, receiverId]
        });
    }
    const newMessage = new Message({
        senderId,
        receiverId,
        message
    });

    if (newMessage){ 
        await conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(201).json(newMessage);

    } catch (error) {
         console.log("Error in sendMessage controller:", error.message);
        res.status(500).send({ error: "Internal server error" });
    }
    
};

const getMessages = async (req,res) => {

    try {
        
        const { id: userToChatWithId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{ $all:[senderId, userToChatWithId] }
        }).populate("messages");

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages
        

        res.status(200).json(messages);



    } catch (error) {
        console.log("Error in getMessage controller:", error.message);
        res.status(500).send({ error: "Internal server error" }); 
    }
};

module.exports = { sendMessage, getMessages };