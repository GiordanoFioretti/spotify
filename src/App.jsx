import React from 'react';
import { PlaylistProvider } from './context/PlaylistContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import Player from './components/Player/Player';
import Search from './components/Search/Search';
import Profile from './components/Profile/Profile';
import Library from './components/Library/Library';

function App() {
  return (
    <PlaylistProvider>
    <Router>
      <div className="app">
        <div className="main-container">
          <Sidebar />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/search" element={<Search />} />
              <Route path="/library" element={<Library />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
        <Player />
      </div>
    </Router>
    </PlaylistProvider>
  )
}
export default App
