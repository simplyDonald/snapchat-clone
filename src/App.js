import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import WebcamCapture from './components/WebcamCapture'
import Preview from './components/Preview';
import Chats from './components/Chats';
import ChatView from './components/ChatView';
import { login, logout, selectUser } from './features/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      {!user ? (<Login />) :(
          <BrowserRouter>
            <img src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="" 
            className='app__logo'
            />
            <div className="app__body">
              <div className="app__bodyBackground">
                <Routes>
                  <Route path="/" element={      <WebcamCapture />} />
                  <Route path="/preview" element={<Preview />} />
                  <Route path="/chats" element={<Chats />} />
                  <Route path="/chats/view" element={<ChatView />} />
                  <Route path="*" element={<div><h2>hello npeople</h2></div>} />
                </Routes>
              </div>
            </div>
        </BrowserRouter>
      )}
      
    </div>
  );
}

export default App;
