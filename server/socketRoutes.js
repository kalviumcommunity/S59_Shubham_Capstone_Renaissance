const { io, server } = require('./index.js')
const User = require('./models/chatUserSchema.js')
const Message = require('./models/messageSchema.js')

io.on('connection', socket => {
    console.log(`${socket.id} connected`)

    //for user to join a room
    socket.on('enterRoom', async ({ userName, room }) => {
        try {
            const user = await activateUser({ socketID: socket.id, userName, room })
            socket.join(user.room)

            //Emit a temporary alert of the new user joining the room
            socket.to(user.room).emit('message', await buildTempMessage("Bot", `${userName} joined the room`, room))

            //Emit the most recent messages of the room
            const recentMessages = await getRecentMessages(room)
            socket.emit("MostRecentMessages", recentMessages.reverse())
        }
        catch (error) {
            console.log("Error entering room", error)
        }
    })

    //to send a new message
    socket.on('newMessage', async (data) => {
        try {
            const findUser = await getUser(socket.id)
            const room = findUser.room
            const message = await buildPermMessage(data.userName, data.message)
            io.to(room).emit('newMessage', message)
        }
        catch (error) {
            console.log("Error emitting the message", error)
        }
    })

    //to handle any user disconnecting
    socket.on('disconnect', async () => {
        const user = await deactivateUser(socket.id)
        //temporary message to room
        socket.to(user.room).emit('message', await buildTempMessage("Bot", `${userName} joined the room`, room))
    })
})

//to fetch the 10 latest messages
async function getRecentMessages(room) {
    try {
        const recentMessages = await Message.find({ room: room }).sort({ _id: -1 }).limit(10)
        return recentMessages
    }
    catch (error) {
        console.log("Error getting the recent messages", error)
        return []
    }
}

//to create a permanent message
async function buildPermMessage(userName, text, room) {
    try {
        const message = new Message({
            userName: userName,
            message: text,
            room: room
        })
        await message.save()
        return message
    }
    catch (error) {
        console.log("Error building a message")
    }
}

//to create a temporary message
async function buildTempMessage(userName, text, room) {
    try {
        const message = {
            userName: userName,
            message: text,
            room: room
        }
        return message
    }
    catch (error) {
        console.log("Error building a message")
    }
}

//to activate a user
async function activateUser({ socketID, userName, room }) {
    try {
        const user = new User({ socketID: socketID, userName: userName, room: room })
        await user.save()
        return user
    }
    catch (error) {
        console.log("Error activatig an user")
    }
}


//to deactivate a user
async function deactivateUser(socketID) {
    try {
        const deleteUser = await User.deleteOne({ socketID: socketID })
        return deleteUser
    }
    catch (error) {
        console.log("Error deleting the user", error)
    }
}

//to get a user
async function getUser(socketID) {
    try {
        const findUser = await User.findOne({ socketID: socketID })
        return findUser
    }
    catch (error) {
        console.log("Error deleting the user", error)
    }
}