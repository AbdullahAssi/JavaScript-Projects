
window.addEventListener('keydown', function(e) {
    console.log(e.keycode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // select the element with the class of key  

    console.log(audio);
    console.log(key);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start   
    audio.play();

    key.classList.add('playing');

    this.setTimeout(function() {
        key.classList.remove('playing');
    },500);
});