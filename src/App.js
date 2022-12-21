import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import WebcamCapture from './components/WebcamCapture'
import Preview from './components/Preview';
import Chats from './components/Chats';
import ChatView from './components/ChatView';
import { selectUser } from './features/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

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
                <Route path="*" element={<div>Hi</div>} />
              </Routes>
            </div>
        </BrowserRouter>
      )}
      
    </div>
  );
}

export default App;
