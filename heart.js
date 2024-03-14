const heart = document.querySelector('.heart_button');
const envelopeWrapper = document.querySelector('.envelope-wrapper');

heart.addEventListener('click', () => {
    envelopeWrapper.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function() {
    var heartButton = document.querySelector('.heart_button');
    var container = document.querySelector('.container');
    var celebrationGif = document.getElementById('celebrationGif');
    var celebrationAudio = document.getElementById('celebrationAudio');

    // Assuming you have an element with the class .image-container
    var imageContainer = document.querySelector('.image-container');

    // Set the .image-container height to 70% of the viewport height
    imageContainer.style.height = '70vh';

    heartButton.addEventListener('click', function() {
        // Hide the entire container, making all its child elements disappear
        container.style.display = 'none';
        
        // Show the celebration GIF
        celebrationGif.style.display = 'block';
        
        // Show and play the celebration audio
        celebrationAudio.style.display = 'block';
        celebrationAudio.play().catch(e => console.error("Playback was prevented. Please interact with the audio controls manually.", e));
    });
    
});



