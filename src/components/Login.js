import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/appSlice';

function Login() {

  const dispatch = useDispatch()

  const signIn = () => {
    auth.signInWithPopup(provider).then(
      ({displayName,photoURL,uid}) => {
        dispatch(login({
          username: displayName,
          profilePic: photoURL,
          id: uid
        }))
      }
    )
    .catch((error) => alert(error.message))
  }


  return (
   <div className="login">
    <div className="login__container">
      <img src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="" />
      <Button variant='outlined' onClick={signIn}>
        Sign In
      </Button>

    </div>

   </div>
  )
}

export default Login