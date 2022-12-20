import { Avatar } from '@mui/material'
import React from 'react'
import './Chat.css'
import StopRoundedIcon from '@mui/icons-material/StopRounded';

function Chat({id, username, timestamp, imageUrl, read, profilePic}) {
  return (
  <div className="chat">
    <Avatar className="chat__avatar" src={profilePic} />
    <div className="chat__info">
      <h4>{username}</h4>
      <p>Tap to view - {new Date(timestamp?.toDate()).toUTCString()}</p>
    </div>  

    {!read && <StopRoundedIcon className='chat__readIcon' />}
  </div>
  )
}

export default Chat