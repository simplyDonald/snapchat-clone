import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import WebcamCapture from './components/WebcamCapture'

function App() {
  return (
    <div className="app_body">
      <BrowserRouter>
        <div className="app__body">
          <Routes>
            <Route path="/" element={      <WebcamCapture />} />
            <Route path="/about" element={<div>About</div>} />
            <Route path="*" element={<div>Hi</div>} />
          </Routes>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
