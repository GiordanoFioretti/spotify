import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import spotifyLogo from '/spotify-logo.svg';

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/spotify-logo.svg" alt="Spotify" />
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </Link>
          </li>
          <li className={location.pathname === '/search' ? 'active' : ''}>
            <Link to="/search">
              <i className="fas fa-search"></i>
              <span>Cerca</span>
            </Link>
          </li>
          <li>
            <a href="#" className="nav-item">
              <i className="fas fa-book"></i>
              <span>La tua libreria</span>
            </a>
          </li>
          <li className={location.pathname === '/profile' ? 'active' : ''}>
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
          <button className="create-playlist-btn">
            <i className="fas fa-plus"></i>
            <span>Crea Playlist</span>
          </button>
        </div>
        <ul className="playlists-list">
          <li><a href="#">La tua playlist #1</a></li>
          <li><a href="#">La tua playlist #2</a></li>
          <li><a href="#">La tua playlist #3</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;