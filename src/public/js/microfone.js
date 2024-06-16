document.getElementById('teste').addEventListener('click', () => {
    const statusElement = document.getElementById('status');
    const audioInput = document.getElementById('audio-input');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                console.log('Microphone access granted');
                statusElement.textContent = 'Microphone access granted';

                const mediaRecorder = new MediaRecorder(stream);
                const audioChunks = [];

                mediaRecorder.ondataavailable = event => {
                    audioChunks.push(event.data);
                };

                mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                    const audioUrl = URL.createObjectURL(audioBlob);
                    const audio = new Audio(audioUrl);
                    audio.play();

                    const file = new File([audioBlob], "recorded-audio.wav", { type: 'audio/wav' });
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(file);
                    audioInput.files = dataTransfer.files;
                    console.log(audioInput.files)
                    console.log('Audio file set to input');
                };

                mediaRecorder.start();
                console.log('Recording started');

                setTimeout(() => {
                    mediaRecorder.stop();
                    console.log('Recording stopped');
                    statusElement.textContent = 'Recording stopped, playing audio...';
                }, 5000); 
            })
            .catch(error => {
                console.error('Microphone access denied:', error);
                statusElement.textContent = 'Microphone access denied';
            });
    } else {
        console.error('getUserMedia not supported on your browser!');
        statusElement.textContent = 'getUserMedia not supported on your browser!';
    }
});

