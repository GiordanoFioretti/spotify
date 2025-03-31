import React, { useState } from 'react';
import './Player.css';
import playIcon from '../../assets/icons/play.svg';
import pauseIcon from '../../assets/icons/pause.svg';
import skipNextIcon from '../../assets/icons/skip-next.svg';
import skipPreviousIcon from '../../assets/icons/skip-previous.svg';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div className="player">
      <div className="player-left">
        <div className="now-playing">
          <img 
            src="https://via.placeholder.com/56" 
            alt="Album cover" 
            className="album-cover"
          />
          <div className="track-info">
            <div className="track-name">Nome Canzone</div>
            <div className="artist-name">Nome Artista</div>
          </div>
          <button className="like-button">
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>

      <div className="player-center">
        <div className="player-controls">
          <button className="control-button">
            <i className="fas fa-random"></i>
          </button>
          <button className="control-button">
            <img src={skipPreviousIcon} alt="Previous" width="24" height="24" />
          </button>
          <button className="control-button play-button" onClick={togglePlay}>
            <img src={isPlaying ? pauseIcon : playIcon} alt={isPlaying ? "Pause" : "Play"} width="24" height="24" />
          </button>
          <button className="control-button">
            <img src={skipNextIcon} alt="Next" width="24" height="24" />
          </button>
          <button className="control-button">
            <i className="fas fa-redo"></i>
          </button>
        </div>
        <div className="progress-bar">
          <span className="time-current">0:00</span>
          <div className="progress-bar-container">
            <div className="progress" style={{ width: '0%' }}></div>
          </div>
          <span className="time-total">3:30</span>
        </div>
      </div>

      <div className="player-right">
        <button className="control-button">
          <i className="fas fa-list"></i>
        </button>
        <button className="control-button">
          <i className="fas fa-volume-up"></i>
        </button>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={volume} 
          onChange={handleVolumeChange} 
          className="volume-slider"
        />
      </div>
    </div>
  );
};

export default Player;