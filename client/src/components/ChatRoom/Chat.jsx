import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import useChat from "./useChat"
import MessageBox from "./Messages/MessageBox"
import Messages from "./Messages/Messages"

function Chat() {
    const { roomID, userName } = useParams()
    const { messages, sendMessage } = useChat(userName, roomID)
    const navigate = useNavigate()

    if (userName == "") {
        navigate(-1)
        toast.alert("UserName cant be empty!")
    }

    return (
        <>
            <h1>Welcome</h1>
            <Messages messages={messages} />
            <MessageBox sendMessage={sendMessage} userName={userName} />
        </>
    )
}

export default Chat
