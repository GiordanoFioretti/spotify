import React, { useState, useEffect, useCallback } from 'react';
import './Player.css';
import playIcon from '../../assets/icons/play.svg';
import pauseIcon from '../../assets/icons/pause.svg';
import skipNextIcon from '../../assets/icons/skip-next.svg';
import skipPreviousIcon from '../../assets/icons/skip-previous.svg';
import { songs } from '../../data/songs';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const currentSong = songs[currentSongIndex];

  const showPlayer = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let hideTimeout;
    const resetTimer = () => {
      clearTimeout(hideTimeout);
      showPlayer();
      hideTimeout = setTimeout(() => setIsVisible(false), 5000);
    };

    const handleMouseMove = () => resetTimer();
    const handleKeyPress = () => resetTimer();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('keypress', handleKeyPress);
    resetTimer();

    return () => {
      clearTimeout(hideTimeout);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [showPlayer]);

  const playSong = (songIndex) => {
    setCurrentSongIndex(songIndex);
    setIsPlaying(true);
    showPlayer();
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const playPreviousSong = () => {
    setCurrentSongIndex((prevIndex) => 
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`player ${!isVisible ? 'player-hidden' : ''}`}>
      <div className="player-left">
        <div className="now-playing">
          <img 
            src={currentSong.albumCover} 
            alt="Album cover" 
            className="album-cover"
          />
          <div className="track-info">
            <div className="track-name">{currentSong.title}</div>
            <div className="artist-name">{currentSong.artist}</div>
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
          <button className="control-button" onClick={playPreviousSong}>
            <img src={skipPreviousIcon} alt="Previous" width="24" height="24" />
          </button>
          <button className="control-button play-button" onClick={togglePlay}>
            <img src={isPlaying ? pauseIcon : playIcon} alt={isPlaying ? "Pause" : "Play"} width="24" height="24" />
          </button>
          <button className="control-button" onClick={playNextSong}>
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
          <span className="time-total">{currentSong.duration}</span>
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