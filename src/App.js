import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import WebcamCapture from './components/WebcamCapture'
import Preview from './components/Preview';
import Chats from './components/Chats';
import ChatView from './components/ChatView';

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
