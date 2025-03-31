import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import spotifyLogo from '/spotify-logo.svg';
import { usePlaylist } from '../../context/PlaylistContext';

const Sidebar = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(() => {
    const saved = localStorage.getItem('sidebarVisible');
    return saved !== null ? JSON.parse(saved) : true;
  });
  const { playlists, createPlaylist } = usePlaylist();

  useEffect(() => {
    localStorage.setItem('sidebarVisible', JSON.stringify(isVisible));
  }, [isVisible]);

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('sidebarVisible');
      setIsVisible(JSON.parse(saved));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleNavClick = () => {};

  return (
    <div className={`sidebar ${isVisible ? '' : 'sidebar-hidden'}`}>
      <div className="sidebar-logo">
        <img src="/spotify-logo.svg" alt="Spotify" />
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''} onClick={handleNavClick}>
            <Link to="/">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </Link>
          </li>
          <li className={location.pathname === '/search' ? 'active' : ''} onClick={handleNavClick}>
            <Link to="/search">
              <i className="fas fa-search"></i>
              <span>Cerca</span>
            </Link>
          </li>
          <li className={location.pathname === '/library' ? 'active' : ''} onClick={handleNavClick}>
            <Link to="/library">
              <i className="fas fa-book"></i>
              <span>La tua libreria</span>
            </Link>
          </li>
          <li className={location.pathname === '/profile' ? 'active' : ''} onClick={handleNavClick}>
            <Link to="/profile">
              <i className="fas fa-user"></i>
              <span>Profilo</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar-playlists">
        <h2>Playlist</h2>
        <div className="create-playlist">
          <button className="create-playlist-btn" onClick={createPlaylist}>
            <i className="fas fa-plus"></i>
            <span>Crea Playlist</span>
          </button>
        </div>
        <ul className="playlists-list">
          {playlists.map(playlist => (
            <li key={playlist.id} onClick={handleNavClick}>
              <a href="#">{playlist.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;