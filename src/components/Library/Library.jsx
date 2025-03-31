import React, { useState } from 'react';
import './Library.css';
import { getRandomImage } from '../../data/playlistImages';

const mockLibraryData = {
  albums: [
    { id: 1, title: 'Album 1', artist: 'Artista 1', imageUrl: getRandomImage() },
    { id: 2, title: 'Album 2', artist: 'Artista 2', imageUrl: getRandomImage() },
    { id: 3, title: 'Album 3', artist: 'Artista 3', imageUrl: getRandomImage() }
  ],
  artists: [
    { id: 1, name: 'Artista 1', followers: '1M followers', imageUrl: getRandomImage() },
    { id: 2, name: 'Artista 2', followers: '500K followers', imageUrl: getRandomImage() },
    { id: 3, name: 'Artista 3', followers: '2M followers', imageUrl: getRandomImage() }
  ],
  playlists: [
    { id: 1, title: 'La mia Playlist #1', songs: '50 brani', imageUrl: getRandomImage() },
    { id: 2, title: 'La mia Playlist #2', songs: '30 brani', imageUrl: getRandomImage() },
    { id: 3, title: 'La mia Playlist #3', songs: '25 brani', imageUrl: getRandomImage() }
  ]
};

const Library = () => {
  const [activeSection, setActiveSection] = useState('albums');
  const [sortBy, setSortBy] = useState('recent');

  const renderContent = () => {
    let items = [];
    switch (activeSection) {
      case 'albums':
        items = mockLibraryData.albums;
        return (
          <div className="library-grid">
            {items.map(album => (
              <div key={album.id} className="library-item">
                <img src={album.imageUrl} alt={album.title} />
                <h3>{album.title}</h3>
                <p>{album.artist}</p>
              </div>
            ))}
          </div>
        );
      case 'artists':
        items = mockLibraryData.artists;
        return (
          <div className="library-grid">
            {items.map(artist => (
              <div key={artist.id} className="library-item">
                <img src={artist.imageUrl} alt={artist.name} className="artist-image" />
                <h3>{artist.name}</h3>
                <p>{artist.followers}</p>
              </div>
            ))}
          </div>
        );
      case 'playlists':
        items = mockLibraryData.playlists;
        return (
          <div className="library-grid">
            {items.map(playlist => (
              <div key={playlist.id} className="library-item">
                <img src={playlist.imageUrl} alt={playlist.title} />
                <h3>{playlist.title}</h3>
                <p>{playlist.songs}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="library-container">
      <div className="library-header">
        <h1>La tua Libreria</h1>
        <div className="library-controls">
          <div className="section-buttons">
            <button
              className={`section-button ${activeSection === 'albums' ? 'active' : ''}`}
              onClick={() => setActiveSection('albums')}
            >
              Album
            </button>
            <button
              className={`section-button ${activeSection === 'artists' ? 'active' : ''}`}
              onClick={() => setActiveSection('artists')}
            >
              Artisti
            </button>
            <button
              className={`section-button ${activeSection === 'playlists' ? 'active' : ''}`}
              onClick={() => setActiveSection('playlists')}
            >
              Playlist
            </button>
          </div>
          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="recent">Recenti</option>
            <option value="alphabetical">Alfabetico</option>
            <option value="creator">Creatore</option>
          </select>
        </div>
      </div>
      {renderContent()}
    </div>
  );
};

export default Library;