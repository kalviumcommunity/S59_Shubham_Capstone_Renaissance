import { toast } from "react-toastify"
import { useState } from "react"

function MessageBox({ sendMessage, userName }) {
    const [text, setText] = useState("")
    const sendMsgClick = (e) => {
        if (e) {
            e.preventDefault()
        }
        
        if (text.trim() == '') {
            toast.warning("Cannot send something empty")
            return
        }
        const msgObject = {userName : userName, message : text}
        setText('')
        sendMessage(msgObject)
    }
    return (
        <form className="flex justify-center items-center">
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={(e) => sendMsgClick(e)}>Send</button>
        </form>
    )
}

export default MessageBox
