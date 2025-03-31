import React, { createContext, useState, useContext } from 'react';
import { defaultPlaylists } from '../data/playlists';

const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState(defaultPlaylists);

  const createPlaylist = () => {
    const newPlaylist = {
      id: playlists.length + 1,
      name: `La mia Playlist #${playlists.length + 1}`,
      type: "playlist"
    };
    setPlaylists([...playlists, newPlaylist]);
  };

  const deletePlaylist = (id) => {
    setPlaylists(playlists.filter(playlist => playlist.id !== id));
  };

  return (
    <PlaylistContext.Provider value={{ playlists, createPlaylist, deletePlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => {
  const context = useContext(PlaylistContext);
  if (!context) {
    throw new Error('usePlaylist must be used within a PlaylistProvider');
  }
  return context;
};