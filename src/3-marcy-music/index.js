const playlists = [
  {
    title: 'Chill Vibes',
    image: './img/playlist-chill.jpg',
    description: 'A playlist for chill vibes',
  },
  {
    title: 'Focus',
    image: './img/playlist-focus.jpg',
    description: 'A playlist for focus',
  },
  {
    title: 'Late Night',
    image: './img/playlist-late-night.jpg',
    description: 'A playlist for late night',
  },
  {
    title: 'Love Songs',
    image: './img/playlist-love.jpg',
    description: 'A playlist for love songs',
  },
  {
    title: 'Oldies',
    image: './img/playlist-oldies.jpg',
    description: 'A playlist for oldies',
  },
  {
    title: 'Sad',
    image: './img/playlist-sad.jpg',
    description: 'A playlist for sad songs',
  },
];

// Add your code here...
const playSong = document.querySelector('#playlists-grid')

playlists.forEach((song) =>{
  //create
  const songLi = document.createElement('li')
  const songImage = document.createElement('img')
  const songTitle = document.createElement('p')
  // modefy
  songLi.classList.add('playlist-card')
  songLi.dataset.title = song.title

  songImage.src = song.image
  songImage.alt = ` ${song.title} playlist cover`

  songTitle.textContent = song.title

  // append
  songLi.append(songImage, songTitle);
  playSong.append(songLi);
})
// added an event listner
const playlistGrid = document.querySelector('#playlists-grid')
playlistGrid.addEventListener('click', event =>{
  const addClicked = event.target.closest('.playlist-card')
  if (!addClicked){
    return;
    
  }
  // here I selected one the one card that the user selected
  const previousCard = document.querySelector('.playlist-card.selected')
  if (previousCard){
    previousCard.classList.remove('selected')
  }
  // Here changed the title name to the one that user selected only 
  addClicked.classList.add('selected')
  const nowPlaying = document.querySelector('#now-playing-title')
  nowPlaying.textContent = addClicked.dataset.title
});