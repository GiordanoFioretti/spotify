import React from 'react';
import './Profile.css';

const mockPlaylists = [
  {
    id: 1,
    title: "Canzoni per Cucinare (e Bruciare) la Pasta",
    coverUrl: "https://via.placeholder.com/150",
    songs: [
      { title: "Spaghetti al Dente Rock", artist: "I Cuochi Matti" },
      { title: "Carbonara Blues", artist: "Pasta Band" },
      { title: "La Ballata del Sugo Bruciato", artist: "Chef Disastro" }
    ]
  },
  {
    id: 2,
    title: "Hits da Doccia 2024",
    coverUrl: "https://via.placeholder.com/150",
    songs: [
      { title: "Shampoo nella Vista", artist: "I Cantanti Insaponati" },
      { title: "L'Eco del Bagno", artist: "Doccia Brothers" },
      { title: "Concerto per Spugna e Sapone", artist: "Bathroom Quartet" }
    ]
  },
  {
    id: 3,
    title: "Musica per Piante (Che Non Crescono Mai)",
    coverUrl: "https://via.placeholder.com/150",
    songs: [
      { title: "Fotosintesi Funk", artist: "Green Thumbs" },
      { title: "Il Valzer dell'Innaffiatura", artist: "Plant Whisperers" },
      { title: "Cresci, Per Favore", artist: "Giardinieri Disperati" }
    ]
  }
];

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img 
          src="https://via.placeholder.com/200" 
          alt="Profile" 
          className="profile-picture"
        />
        <div className="profile-info">
          <h1>Il Tuo Profilo</h1>
          <div className="profile-stats">
            <span>3 Playlist</span>
            <span>• 9 Brani</span>
          </div>
        </div>
      </div>

      <div className="playlists-section">
        <h2>Le Tue Playlist</h2>
        <div className="playlists-grid">
          {mockPlaylists.map(playlist => (
            <div key={playlist.id} className="playlist-card">
              <img src={playlist.coverUrl} alt={playlist.title} />
              <h3>{playlist.title}</h3>
              <div className="playlist-songs">
                {playlist.songs.map((song, index) => (
                  <div key={index} className="song-item">
                    <span className="song-title">{song.title}</span>
                    <span className="song-artist">{song.artist}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;