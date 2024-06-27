import { useEffect } from "react"
function Messages(messages) {
    useEffect(() => {
        console.log(messages)
    }, [messages])
    return (
        // messages && messages.map((message, index) => (
        //     <div key={index}>
        //         {message.userName} <br />
        //         {message.message}
        //     </div>
        // ))
        "Hey"
    )
}

export default Messages
