import React from 'react';
import './Profile.css';
import { getProfileImageUrl } from '../../utils/profileImage';
import { usePlaylist } from '../../context/PlaylistContext';

const Profile = () => {
  const { playlists, createPlaylist, deletePlaylist } = usePlaylist();

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img 
          src={getProfileImageUrl()} 
          alt="Profile" 
          className="profile-picture"
        />
        <div className="profile-info">
          <h1>Il Tuo Profilo</h1>
          <div className="profile-stats">
            <span>{playlists.length} Playlist</span>
            <span>• {playlists.length * 3} Brani</span>
          </div>
        </div>
      </div>

      <div className="playlists-section">
        <div className="playlists-header">
          <h2>Le Tue Playlist</h2>
          <button className="create-playlist-btn" onClick={createPlaylist}>
            <i className="fas fa-plus"></i>
            <span>Crea Playlist</span>
          </button>
        </div>
        <div className="playlists-grid">
          {playlists.map(playlist => (
            <div key={playlist.id} className="playlist-card">
              <div className="playlist-header">
                <img src="https://via.placeholder.com/150" alt={playlist.name} />
                <button 
                  className="delete-playlist-btn" 
                  onClick={() => deletePlaylist(playlist.id)}
                  title="Elimina playlist"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
              <h3>{playlist.name}</h3>
              <div className="playlist-songs">
                <div className="song-item">
                  <span className="song-title">Canzone di esempio 1</span>
                  <span className="song-artist">Artista 1</span>
                </div>
                <div className="song-item">
                  <span className="song-title">Canzone di esempio 2</span>
                  <span className="song-artist">Artista 2</span>
                </div>
                <div className="song-item">
                  <span className="song-title">Canzone di esempio 3</span>
                  <span className="song-artist">Artista 3</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;