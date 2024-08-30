const music = Audio('vande.mp3')

// create Array

const songs = [
    {
        id:'1',
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "../images/arjit.jpeg"
    },
    {
        id:'1',
        songName:`Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "../images/arjit.jpeg"
    }
    // all objects
]

Array.from(document.getElementsByClassName('song-item')).forEach((element, id) => {
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

})