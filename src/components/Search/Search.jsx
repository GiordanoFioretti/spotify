import React, { useState } from 'react';
import './Search.css';
import playIcon from '../../assets/icons/play.svg';
import { getRandomImage } from '../../data/playlistImages';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const genres = [
    { id: 1, name: 'Pop', color: '#FF4081' },
    { id: 2, name: 'Rock', color: '#7C4DFF' },
    { id: 3, name: 'Hip Hop', color: '#FF6E40' },
    { id: 4, name: 'Jazz', color: '#18FFFF' },
    { id: 5, name: 'Elettronica', color: '#64FFDA' },
    { id: 6, name: 'Classica', color: '#B388FF' },
    { id: 7, name: 'R&B', color: '#EA80FC' },
    { id: 8, name: 'Metal', color: '#FF5252' }
  ];

  const recentSearches = [
    { id: 1, title: 'Queen', type: 'Artista', imageUrl: getRandomImage() },
    { id: 2, title: 'Lo-Fi Beats', type: 'Playlist', imageUrl: getRandomImage() },
    { id: 3, title: 'Dark Side of the Moon', type: 'Album', imageUrl: getRandomImage() }
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <div className="search-input-container">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Cosa vuoi ascoltare?"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="search-filters">
          <button
            className={`filter-button ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            Tutto
          </button>
          <button
            className={`filter-button ${selectedFilter === 'artists' ? 'active' : ''}`}
            onClick={() => handleFilterChange('artists')}
          >
            Artisti
          </button>
          <button
            className={`filter-button ${selectedFilter === 'albums' ? 'active' : ''}`}
            onClick={() => handleFilterChange('albums')}
          >
            Album
          </button>
          <button
            className={`filter-button ${selectedFilter === 'playlists' ? 'active' : ''}`}
            onClick={() => handleFilterChange('playlists')}
          >
            Playlist
          </button>
        </div>
      </div>

      {!searchQuery && (
        <>
          <section className="recent-searches">
            <h2>Ricerche recenti</h2>
            <div className="recent-searches-grid">
              {recentSearches.map(item => (
                <div key={item.id} className="recent-search-item">
                  <img src={item.imageUrl} alt={item.title} />
                  <div className="item-info">
                    <h3>{item.title}</h3>
                    <p>{item.type}</p>
                  </div>
                  <button className="play-button">
                    <img src={playIcon} alt="Play" width="20" height="20" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="genres">
            <h2>Sfoglia tutto</h2>
            <div className="genres-grid">
              {genres.map(genre => (
                <div
                  key={genre.id}
                  className="genre-card"
                  style={{ backgroundColor: genre.color }}
                >
                  <h3>{genre.name}</h3>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {searchQuery && (
        <div className="search-results">
          <h2>Risultati per "{searchQuery}"</h2>
          <div className="results-grid">
            {/* I risultati della ricerca verranno mostrati qui */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;