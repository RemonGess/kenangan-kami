document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play-button');
    const audio = document.getElementById('background-music');

    // Check if audio is already playing
    if (sessionStorage.getItem('musicPlaying') === 'true') {
        audio.play();
        playButton.textContent = 'Pause Music';
    }

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playButton.textContent = 'Pause Music';
            sessionStorage.setItem('musicPlaying', 'true');
        } else {
            audio.pause();
            playButton.textContent = 'Play Music';
            sessionStorage.setItem('musicPlaying', 'false');
        }
    });
});
