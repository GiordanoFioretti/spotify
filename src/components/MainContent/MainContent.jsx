import React from 'react';
import './MainContent.css';
import playIcon from '../../assets/icons/play.svg';
import { getRandomImage } from '../../data/playlistImages';

const MainContent = () => {
  const featuredPlaylists = [
    {
      id: 1,
      title: 'Mix Daily 1',
      description: 'Ascolta il tuo mix quotidiano di brani',
      imageUrl: getRandomImage()
    },
    {
      id: 2,
      title: 'Scoperte della settimana',
      description: 'La tua playlist settimanale con nuovi brani',
      imageUrl: getRandomImage()
    },
    {
      id: 3,
      title: 'Hit del momento',
      description: 'I brani più ascoltati ora',
      imageUrl: getRandomImage()
    },
    {
      id: 4,
      title: 'Mood Relax',
      description: 'Playlist perfetta per rilassarsi',
      imageUrl: getRandomImage()
    },
    {
      id: 5,
      title: 'Top Italia',
      description: 'I brani più popolari in Italia',
      imageUrl: getRandomImage()
    },
    {
      id: 6,
      title: 'Indie Italia',
      description: 'Il meglio della scena indie italiana',
      imageUrl: getRandomImage()
    }
  ];

  return (
    <div className="main-content">
      <header className="main-header">
        <div className="header-buttons">
          <button className="nav-button">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="nav-button">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="user-menu">
          <button className="user-button">
            <img src="https://via.placeholder.com/28" alt="User" />
            <span>Il tuo profilo</span>
            <i className="fas fa-caret-down"></i>
          </button>
        </div>
      </header>

      <section className="content-section">
        <h2>Buongiorno</h2>
        <div className="featured-grid">
          {featuredPlaylists.slice(0, 6).map(playlist => (
            <div key={playlist.id} className="featured-item">
              <img src={playlist.imageUrl} alt={playlist.title} />
              <div className="featured-item-info">
                <h3>{playlist.title}</h3>
                <button className="play-button">
                  <img src={playIcon} alt="Play" width="20" height="20" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2>Creato per te</h2>
        <div className="playlist-grid">
          {featuredPlaylists.map(playlist => (
            <div key={playlist.id} className="playlist-card">
              <div className="playlist-image">
                <img src={playlist.imageUrl} alt={playlist.title} />
                <button className="play-button">
                  <img src={playIcon} alt="Play" width="20" height="20" />
                </button>
              </div>
              <h3>{playlist.title}</h3>
              <p>{playlist.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainContent;