import { useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function Enter() {
    const { roomID } = useParams()
    const [userName, setUserName] = useState("")
    return (
        <>
            <form>
                <input type="text" placeholder="Enter your name here" onChange={(e) => setUserName(e.target.value)} required/>
                <Link to={`/Chats/${roomID}/${userName}`}><button>Enter the room</button></Link>
            </form>
        </>
    )
}

export default Enter
