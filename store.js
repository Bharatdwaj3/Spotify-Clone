const fs = require('fs');

// Define the path where audio files will be stored
const AUDIO_FOLDER = './audio/';

// Function to save an audio file
function saveAudioFile(file, callback) {
	// Generate a unique filename based on the current timestamp
	const filename = Date.now() + '_' + file.name;
	// Use the fs module to write the file to disk
	fs.writeFile(AUDIO_FOLDER + filename, file.data, err => {
		if (err) {
			// Call the callback with an error message
			callback('Unable to save file');
		} else {
			// Call the callback with the filename of the saved file
			callback(null, filename);
		}
	});
}

module.exports = {
	saveAudioFile
};
