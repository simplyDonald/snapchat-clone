import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectSelectedImage } from '../features/appSlice'
import './ChatView.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function ChatView() {
  const selectedImage = useSelector(selectSelectedImage)
  const navigate = useNavigate();
  const exit = useCallback(() => {
    navigate('/chats', {replace: true})

  },[navigate])

  useEffect(() => {
    if (!selectedImage) {
      exit()
    }
  },[selectedImage, exit])

  return (
    <div className="chatView">
      <img src={selectedImage} alt="" onClick={exit} />
      <div className="chatView__timer">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={6}
          size={50} 
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
        
        >
          {({remainingTime}) => {
            if (remainingTime === 0) {
              exit()
            }
            return remainingTime
          }}
        </CountdownCircleTimer>  
      </div>  
    </div>
  )
}

export default ChatView