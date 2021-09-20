const img = document.querySelector("img");
const music = document.querySelector("audio");
const play = document.getElementById("play");

const title = document.getElementById("title");
const artist = document.getElementById("artist");

const previous = document.getElementById("previous");
const next = document.getElementById("next");

const songs = [
  {
    name : "GunganTujeOthavarRahuDe",
    title : "Ya re Ya",
    artist : "Rohan Pradhan",
  },
  {
    name : "VaathiComing",
    title : "Vaathi Coming",
    artist : "Anirudh Ravichander"
  },
  {
    name : "stereohearts",
    title : "Steroe Hearts",
    artist : "Gym Class Hereos"
  },
  {
    name : "LetMeDownSlowly",
    title : "Let Me Down",
    artist : "The Chainsmokers"
  },
  {
    name : "IntoYourArms",
    title : "Into Your Arms",
    artist : "Witt Lowry"
  },
  {
    name : "DuskTillDawn",
    title : "Dusk Till Dawn",
    artist : "Zayn"
  },
  {
    name : "SiaUnstoppable",
    title : "Sia Unstoppable",
    artist : "Sia Furler"
  },
  {
    name : "DancingWithYourGhost",
    title : "Dancing With Your Ghost",
    artist : "Sasha Alex Sloan"
  },
  {
    name : "AllTimeLow",
    title : "All Time Low",
    artist : "Alex Gaskarth"
  }
]

let playing = false;

const playmusic = () => {
  playing = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("animate");
};

const pausemusic = () => {
  playing = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("animate");
};

play.addEventListener("click", () => {
  if (playing) {
    pausemusic();
  } else {
    playmusic();
  }
});

const loadSongs = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = songs.name + ".mp3";
  img.src = songs.name + ".jpg";
};

songIndex = 0; 

const nextsong = () => {
  songIndex = (songIndex + 1 ) % songs.length;
  loadSongs(songs[songIndex]);
  playmusic();
};

const previoussong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length ;
  loadSongs(songs[songIndex]);
  playmusic();
};


next.addEventListener('click',nextsong);
previous.addEventListener('click',previoussong);

