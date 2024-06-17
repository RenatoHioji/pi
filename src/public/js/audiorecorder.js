let mediaRecorder;
let recordedChunks = [];

const startRecordingButton = document.getElementById('startRecording');
const stopRecordingButton = document.getElementById('stopRecording');
const playRecordingButton = document.getElementById('playRecording');
const audioInput = document.getElementById('audioInput');

function startRecording() {
    recordedChunks = []; // Reset chunks
    mediaRecorder.start();
    startRecordingButton.disabled = true;
    stopRecordingButton.disabled = false;
}

function stopRecording() {
    mediaRecorder.stop();
    startRecordingButton.disabled = false;
    stopRecordingButton.disabled = true;
}

function playRecording() {
    const audio = new Audio(URL.createObjectURL(recordedChunks[0]));
    audio.controls = true;
    document.body.appendChild(audio);
}

function initRecord() {
    // Check for browser support
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Access the microphone
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function (stream) {
                // Create a MediaRecorder instance
                mediaRecorder = new MediaRecorder(stream);

                // Handlers for the media recorder events
                mediaRecorder.ondataavailable = function (e) {
                    recordedChunks.push(e.data);
                };

                mediaRecorder.onstop = function () {
                    const blob = new Blob(recordedChunks, { type: 'audio/mp3' });
                    const files = new FileList([new File([blob], 'recording.mp3', { type: 'audio/mp3' })]);
                    audioInput.files = files;

                    playRecordingButton.disabled = false;
                };

                // Start recording when the Start button is clicked
                startRecordingButton.onclick = () => {
                    startRecording();
                    startRecordingButton.style.display = "none";
                    stopRecordingButton.style.display = "block";
                };

                // Stop recording when the Stop button is clicked
                stopRecordingButton.onclick = () => {
                    stopRecording();
                    stopRecordingButton.style.display = "none";
                    startRecordingButton.style.display = "block";
                };

                // Play the recorded audio when the Play button is clicked
                playRecordingButton.onclick = () => { playRecording(); };
            })
            .catch(function (err) {
                console.error('Error accessing microphone:', err);
            });
    } else {
        console.error('getUserMedia not supported on your browser!');
    }
}   