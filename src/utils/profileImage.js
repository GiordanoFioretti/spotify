// Utility per gestire l'immagine del profilo

// Genera un seed casuale se non esiste
const generateRandomSeed = () => {
  return Math.random().toString(36).substring(2, 15);
};

// Ottiene il seed dal localStorage o ne crea uno nuovo
const getProfileSeed = () => {
  const storedSeed = localStorage.getItem('profileImageSeed');
  if (!storedSeed) {
    const newSeed = generateRandomSeed();
    localStorage.setItem('profileImageSeed', newSeed);
    return newSeed;
  }
  return storedSeed;
};

// Genera l'URL dell'immagine del profilo usando DiceBear
export const getProfileImageUrl = () => {
  const seed = getProfileSeed();
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4`;
};