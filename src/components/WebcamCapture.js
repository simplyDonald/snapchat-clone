import {useRef, useCallback, useState} from 'react'
import Webcam from 'react-webcam'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useDispatch, useSelector } from 'react-redux';
import { selectCameraImage, setCameraImage } from '../features/cameraSlice';

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user"
}

function WebcamCapture() {

  const webcamRef = useRef(null)

  const dispatch = useDispatch()

  const img = useSelector(selectCameraImage)


  const capture = useCallback(()=>{
    const imgSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imgSrc))
  },[dispatch, webcamRef])

  return (
    <div className="webcamCapture">

      <Webcam 
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />

      <RadioButtonUncheckedIcon 
        className="webcamCapture__button"
        onClick={capture}
        fontSize="large"
      />
      
      <img src={img} alt="" />

    </div>
  )
}

export default WebcamCapture