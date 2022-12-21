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
            <div className="app__body">
              <Routes>
                <Route path="/" element={      <WebcamCapture />} />
                <Route path="/preview" element={<Preview />} />
                <Route path="/chats" element={<Chats />} />
                <Route path="/chats/view" element={<ChatView />} />
                <Route path="*" element={<div><h2>hello npeople</h2></div>} />
              </Routes>
            </div>
        </BrowserRouter>
      )}
      
    </div>
  );
}

export default App;
