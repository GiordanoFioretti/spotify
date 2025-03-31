export const playlistImages = [
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80',
  'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&q=80',
  'https://images.unsplash.com/photo-1459305272254-33a7d593a851?w=300&q=80',
  'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=300&q=80',
  'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&q=80',
  'https://images.unsplash.com/photo-1452724931113-5ab6340ce080?w=300&q=80',
  'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=300&q=80'
];

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * playlistImages.length);
  return playlistImages[randomIndex];
};