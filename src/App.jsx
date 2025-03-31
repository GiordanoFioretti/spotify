import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import Search from './components/Search/Search';
import Player from './components/Player/Player';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="main-container">
          <Sidebar />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/search" element={<Search />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
        <Player />
      </div>
    </Router>
  )
}

export default App
