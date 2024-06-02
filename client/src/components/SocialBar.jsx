import { useEffect, useState } from 'react'
import likeIcon from '../assets/like-icon.png'
import likedIcon from '../assets/liked-icon.png'
import { getNoOfLikesForProject, likeProject, checkIfLiked } from '../utils/apiUtils'
import getUserDetails from '../utils/getUserDetails'

function SocialBar({ projectID }) {
    const [likes, setLikes] = useState(0)
    const [canLike, setCanLike] = useState(false)
    const userID = getUserDetails('userID')

    useEffect(() => {
        checkLike()
        getNoOfLikesForProject(projectID)
            .then(response => setLikes(response.data.likes))
            .catch(error => console.log(error))
    }, [projectID])

    const handleLikeAction = () => {
        likeProject(projectID, userID)
            .then(response => {
                setLikes(response.data.likes)
                setCanLike(false)
            })
            .catch(error => console.log(error))
    }

    const checkLike = () => {
        checkIfLiked(projectID, userID)
            .then(response => {if(response.status === 200) {setCanLike(true)}})
            .catch(error => {
                if(error.response.status === 409) setCanLike(false)
                else console.log(error)
            })
    }

    return (
        <div className='flex flex-col justify-center items-center cursor-pointer' title='Upvote'>
            {canLike ?
                <img src={likeIcon} alt="likeProject" className='w-8' onClick={() => handleLikeAction()} />
                :
                <img src={likedIcon} alt="likedProject" className='w-8'/>
            }
            <p className='text-[13px] mt-1.5 text-slate-600'>{likes} Upvotes</p>
        </div>
    )
}

export default SocialBar
