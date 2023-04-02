const audio = document.querySelector('audio');
const playPauseButton = document.querySelector('.play-pause');
const progressBar = document.querySelector('.progress-bar');
const currentTime = document.querySelector('.current-time');
const duration = document.querySelector('.duration');
const muteButton = document.querySelector('.mute');
const volumeControl = document.querySelector('.volume');

// Play and pause the audio
playPauseButton.addEventListener('click', () => {
	if (audio.paused) {
		audio.play();
		playPauseButton.classList.add('playing');
	} else {
		audio.pause();
		playPauseButton.classList.remove('playing');
	}
});

// Update the progress bar and time display
audio.addEventListener('timeupdate', () => {
	const progressPercent = (audio.currentTime / audio.duration) * 100;
	progressBar.style.width = progressPercent + '%';

	const minutes = Math.floor(audio.currentTime / 60);
	const seconds = Math.floor(audio.currentTime % 60);
	currentTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

	duration.textContent = `${Math.floor(audio.duration / 60)}:${Math.floor(audio.duration % 60).toString().padStart(2, '0')}`;
});

// Mute and unmute the audio
muteButton.addEventListener('click', () => {
	if (audio.volume === 0) {
		audio.volume = volumeControl.value / 100;
		volumeControl.value = audio.volume * 100;
		muteButton.classList.remove('muted');
	} else {
		audio.volume = 0;
		volumeControl.value = 0;
		muteButton.classList.add('muted');
	}
});

// Adjust the volume
volumeControl.addEventListener('input', () => {
	audio.volume = volumeControl.value / 100;
	if (audio.volume === 0) {
		muteButton.classList.add('muted');
	} else {
		muteButton.classList.remove('muted');
	}
});

// Handle audio errors
audio.addEventListener('error', () => {
	const errorMessage = document.createElement('p');
	errorMessage.textContent = 'Error: Unable to load audio file.';
	errorMessage.classList.add('audio-error');
	audio.parentNode.insertBefore(errorMessage, audio.nextSibling);
});
