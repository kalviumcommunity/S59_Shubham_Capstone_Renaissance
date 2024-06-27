import { useEffect, useState, useRef } from "react"
import { getRoomName } from '../../utils/apiUtils'
import socketIOClient from "socket.io-client"

const useChat = (userName, roomID) => {
    const socketRef = useRef();
    const [roomName, setRoomName] = useState(null)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        //get the room name corresponding to the room
        getRoomName(roomID)
            .then(result => 
                {setRoomName(result.data.roomName)
                    
                })
            .catch(error => console.log("Error getting the room name"))
    }, [])

    useEffect(() => {
        console.log(userName)
        // Initialize the socket connection
        socketRef.current = socketIOClient('http://localhost:8080');

        // Handle receiving the most recent messages
        socketRef.current.on("MostRecentMessages", (mostRecentMessages) => {
            setMessages(mostRecentMessages)
        })

        //Handle receiving new messages
        socketRef.current.on("newMessage", ({ userName, message }) => {
            console.log("Messh")
            setMessages(prevMessages => [...prevMessages, { userName, message }])
        })

        //Join the room
        socketRef.current.emit("enterRoom", { userName, room: roomName })

        //to clean up the connection
        return () => {
            socketRef.current.disconnect()
        }
    }, [roomName])

    //to send a new message
    const sendMessage = (messageObj) => {
        socketRef.current.emit("newMessage", messageObj)
    }

    return { messages, sendMessage }
}

export default useChat


