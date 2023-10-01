// Initialize variables for minutes, seconds, and timer status
let minutes = 0;
let seconds = 0;
let isRunning = false;
let intervalId;

// Get the timer element from the HTML
const timerElement = document.getElementById("timer");

// Add event listeners to the start, stop, and reset buttons
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

// Function to start the timer
function startTimer() {
  if (!isRunning) {
    isRunning = true;
    intervalId = setInterval(() => {
      // Increment seconds and handle minute rollover
      seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      // Update the timer display
      timerElement.textContent = formatTime(minutes, seconds);
    }, 1000); // Run the interval every second (1000 milliseconds)
  }
}

// Function to stop the timer
function stopTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(intervalId); // Clear the interval to stop the timer
  }
}

// Function to reset the timer
function resetTimer() {
  stopTimer();
  minutes = 0;
  seconds = 0;
  // Reset the timer display
  timerElement.textContent = formatTime(minutes, seconds);
}

// Function to format the time as "MM:SS"
function formatTime(minutes, seconds) {
  return `${padZero(minutes)}:${padZero(seconds)}`;
}

// Function to pad single-digit values with a leading zero
function padZero(value) {
  return value < 10 ? `0${value}` : value;
}