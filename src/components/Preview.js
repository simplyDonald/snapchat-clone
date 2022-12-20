import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetCameraImage, selectCameraImage } from '../features/cameraSlice'
import './Preview.css'
import CloseIcon from '@mui/icons-material/Close';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CreateIcon from '@mui/icons-material/Create';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CropIcon from '@mui/icons-material/Crop';
import TimerIcon from '@mui/icons-material/Timer';
import NotesIcon from '@mui/icons-material/Notes';
import SendIcon from '@mui/icons-material/Send';
import { v4 as uuid } from 'uuid';
import { db, storage } from '../firebase';
import firebase from 'firebase';


function Preview() {

   const cameraImage = useSelector(selectCameraImage)

   const navigate = useNavigate();

   const dispatch = useDispatch();

  useEffect(() => {
    if(!cameraImage){
      navigate('/', {replace: true})
    }

  },[cameraImage, navigate])

  const closePreview = () => {
    dispatch(resetCameraImage())
  }

  const sendPost = () => {
    // cretaes a random unique id:
    const id = uuid();

    // create a reference to the storage location:
    const uploadTask = storage.ref(`posts/${id}`).putString(cameraImage, "data_url");

    uploadTask.on('state_changed', null, (error) => {
      // error function
      console.log(error)
    }, () => {
      // complete function
      storage.ref('posts').child(id).getDownloadURL().then(url => {
        db.collection('posts').add({
          imageUrl: url,
          username: 'johndoe',
          read: false,
          profilePic: 'https://www.w3schools.com/howto/img_avatar.png',
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        navigate('/chats', {replace: true})
      })

    });
  }

  return (
    <div className="preview">
      <CloseIcon className='preview__close' onClick={closePreview} />
      <div className="preview__toolbarRight">
        <TextFieldsIcon />
        <CreateIcon />
        <NotesIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <CropIcon />
        <TimerIcon />

      </div>
      <div onClick={sendPost} className="preview__footer">
        <h2>Send Now</h2>
        <SendIcon className="preview__sendIcon" />
      </div>

      <img src={cameraImage} alt="" />

    </div>
  )
}

export default Preview