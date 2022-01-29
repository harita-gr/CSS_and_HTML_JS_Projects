const sounds= ['applause','gasp','boo','tada','victory','wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener('click',() => {
          stopSongs(); //to stop playing other sounds to prevent overlapping
          document.getElementById(sound).play();
    })
    document.getElementById('buttons').appendChild(btn);
})

function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause(); //no audio STOP functionality
        song.currentTime = 0; //pause and start from 0s next time
    })
}