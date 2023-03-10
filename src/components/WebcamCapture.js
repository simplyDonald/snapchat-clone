import {useRef, useCallback} from 'react'
import Webcam from 'react-webcam'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './WebcamCapture.css'
import { setCameraImage } from '../features/cameraSlice';

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user"
}

function WebcamCapture() {

  const webcamRef = useRef(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();




  const capture = useCallback(()=>{
    const imgSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imgSrc));
    navigate('/preview');
  },[dispatch, webcamRef, navigate])

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

    </div>
  )
}

export default WebcamCapture