let startTime = 0;
let vPressed = false;
let scores = []; // Array to store reaction times
const timerIndicator = document.getElementById('timer-indicator');
const resultElement = document.getElementById('result');
const averageElement = document.createElement('div'); // Create a new element for average
averageElement.classList.add('average'); // Add a class for styling
averageElement.textContent = 'Average: 0 frames'; // Initial average display
document.querySelector('.container').appendChild(averageElement); // Add to DOM

document.addEventListener('keydown', function(event) {
    const messageElement = document.getElementById('message');

    if (event.key === 'v' || event.key === 'V') {
        if (!vPressed) {
            startTime = Date.now();
            vPressed = true;
            messageElement.textContent = 'Great! Now press the "S" key.';
            messageElement.style.backgroundColor = '#f39c12';
            timerIndicator.classList.add('active'); // Add the active class
        }
    } else if (event.key === 's' || event.key === 'S') {
        if (vPressed) {
            const elapsedTime = Date.now() - startTime;
            const frames = Math.round(elapsedTime / (1000 / 60)); // Calculate frames
            resultElement.textContent = `Your reaction time: ${frames} frames`;
            resultElement.classList.add('show');
            messageElement.textContent = 'Press "V" to try again!';
            messageElement.style.backgroundColor = '#2ecc71';

            // Update scores array and calculate average
            scores.push(frames);
            const average = scores.reduce((a, b) => a + b, 0) / scores.length || 0;
            averageElement.textContent = `Average: ${Math.round(average)} frames`;

            vPressed = false;
            timerIndicator.classList.remove('active'); // Remove the active class
        }
    }
});