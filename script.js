var m = document.getElementById("puzzle1");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function showModal1() {
  document.getElementById("puzzle1").style.display = "flex";
}
function showModal2() {
  document.getElementById("puzzle2").style.display = "flex";
}
function showModal3() {
  document.getElementById("puzzle3").style.display = "flex";
}
function showHint1() {
  document.getElementById("hint1").style.display = "flex";
}
function showHint2() {
  document.getElementById("hint2").style.display = "flex";
}
function showHint3() {
  document.getElementById("hint3").style.display = "flex";
}
function showOBJ() {
  document.getElementById("objective").style.display = "flex";
  document.getElementById("dbh").play();
  audio.currentTime = 0;
}

function hideModal() {
  document.getElementById("puzzle1").style.display = "none";
  document.getElementById("puzzle2").style.display = "none";
  document.getElementById("puzzle3").style.display = "none";
  document.getElementById("hint1").style.display = "none";
  document.getElementById("hint2").style.display = "none";
  document.getElementById("hint3").style.display = "none";
  document.getElementById("objective").style.display = "none";
  document.getElementById("autoModal").style.display = "none";
}

const backgroundMusic = document.getElementById("backgroundMusic");

function startBackgroundMusic() {
  backgroundMusic.play();
}

function stopBackgroundMusic() {
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0; // Optional: Reset the music to start from the beginning
}

backgroundMusic.volume = 0.1; // Set volume to XX%
backgroundMusic.muted = false; // Unmute (set to true if you want to mute it)

setTimeout(() => {
  stopBackgroundMusic();
}, 5 * 60 * 1000); // 5 minutes in milliseconds

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Wait for the user to click anywhere on the page
window.addEventListener(
  "click",
  function () {
    const backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.muted = false; // Unmute the audio after the user clicks anywhere on the page
    backgroundMusic.play(); // Play the audio if it hasn't started playing already
  },
  { once: true }
); // `once: true` ensures the listener is triggered only once

function playMorse() {
  document.getElementById("morsecode").play();
  audio.currentTime = 0;

  // Play the Morse code sound (assuming there's an audio element for the Morse sound)
  var morseSound = document.getElementById("morsecode");
  morseSound.play();
}

// Update the timer every second
const countdownElement = document.getElementById("countdown");
let time = 5 * 62; // Start with 5 minutes
//let time = 30; // Start with 5 minutes

const interval = setInterval(() => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // Format the time as MM:SS
  countdownElement.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  // Decrease time by 1 second
  time--;

  // Change style when time is running low
  if (time <= 30) {
    countdownElement.classList.add("warning");
    countdownElement.classList.remove("success");
  }

  // Stop the timer when it reaches zero
  if (time < 0) {
    clearInterval(interval);
    countdownElement.textContent = "Time's up!";
    countdownElement.classList.add("success");
    countdownElement.classList.remove("warning");

    // Check if the puzzles were solved
    if (!(puzzle1Solved && puzzle2Solved && puzzle3Solved)) {
    }
  }
}, 1000);

// Function to refresh the page or restart the game
function refreshPage() {
  location.reload(); // Refreshes the page, or replace with game restart logic
}

// Define the correct codes for each puzzle
const correctCode1 = "help me"; // Code for Puzzle 1
const correctCode2 = "hurry up and leave"; // Code for Puzzle 2
const correctCode3 = "die"; // Code for Puzzle 3

// Grab elements for each puzzle's input, button, and message
const codeInput1 = document.getElementById("codeInput1");
const submitCodeBtn1 = document.getElementById("submitCodeBtn1");
const codeMessage1 = document.getElementById("codeMessage1");

const codeInput2 = document.getElementById("codeInput2");
const submitCodeBtn2 = document.getElementById("submitCodeBtn2");
const codeMessage2 = document.getElementById("codeMessage2");

const codeInput3 = document.getElementById("codeInput3");
const submitCodeBtn3 = document.getElementById("submitCodeBtn3");
const codeMessage3 = document.getElementById("codeMessage3");

// Function to handle validation for Puzzle 1
submitCodeBtn1.addEventListener("click", function () {
  const userCode = codeInput1.value.trim();

  if (userCode === correctCode1) {
    // codeMessage1.textContent = "Congratulations! You solved Puzzle 1!";
    codeMessage1.classList.remove("error");
    codeMessage1.classList.add("success");
    document.getElementById("cbm").play();
    document.getElementById("puzzle1").style.display = "none"; // Hide Puzzle 1 when solved
    puzzle1Solved = true; // Mark Puzzle 1 as solved
    checkAllPuzzlesSolved(); // Check if all puzzles are solved
  } else {
    //  codeMessage1.textContent = "Incorrect code. Try again.";
    codeMessage1.classList.remove("success");
    codeMessage1.classList.add("error");
    document.getElementById("wagf").play();
  }

  codeInput1.value = ""; // Clear the input field after submission
});

const wrongAsnwerAudio = document.getElementById("wagf");
wrongAsnwerAudio.volume = 1;

// Function to handle validation for Puzzle 2
submitCodeBtn2.addEventListener("click", function () {
  const userCode = codeInput2.value.trim();

  if (userCode === correctCode2) {
    //  codeMessage2.textContent = "Congratulations! You solved Puzzle 2!";
    codeMessage2.classList.remove("error");
    codeMessage2.classList.add("success");
    document.getElementById("cbm").play();
    document.getElementById("puzzle2").style.display = "none"; // Hide Puzzle 2 when solved
    puzzle2Solved = true; // Mark Puzzle 1 as solved
    checkAllPuzzlesSolved(); // Check if all puzzles are solved
  } else {
    // codeMessage2.textContent = "Incorrect code. Try again.";
    codeMessage2.classList.remove("success");
    codeMessage2.classList.add("error");
    document.getElementById("wagf").play();
  }

  codeInput2.value = ""; // Clear the input field after submission
});

// Function to handle validation for Puzzle 3
submitCodeBtn3.addEventListener("click", function () {
  const userCode = codeInput3.value.trim();

  if (userCode === correctCode3) {
    // codeMessage3.textContent = "Congratulations! You solved Puzzle 3!";
    codeMessage3.classList.remove("error");
    codeMessage3.classList.add("success");
    document.getElementById("cbm").play();
    document.getElementById("puzzle3").style.display = "none"; // Hide Puzzle 3 when solved
    puzzle3Solved = true; // Mark Puzzle 1 as solved
    checkAllPuzzlesSolved(); // Check if all puzzles are solved
  } else {
    // codeMessage3.textContent = "Incorrect code. Try again.";
    codeMessage3.classList.remove("success");
    codeMessage3.classList.add("error");
    document.getElementById("wagf").play();
  }

  codeInput3.value = ""; // Clear the input field after submission
});

function checkAllPuzzlesSolved() {
  if (puzzle1Solved && puzzle2Solved && puzzle3Solved) {
    enableDoor(); // Enable the door when all puzzles are solved
  }
}

// Function to enable the door
function enableDoor() {
  const door = document.getElementById("door");
  // Change the door image to the unlocked version
  door.src = "images/door.png"; // Replace with your unlocked door image

  // Enable clicking on the door
  door.style.pointerEvents = "auto"; // Allow clicking
}

function leave() {
  window.location.href = "https://2jwxhh.csb.app/";
}

function openDoor() {
  if (puzzle1Solved && puzzle2Solved && puzzle3Solved) {
    alert("The door is open! You solved all the puzzles!");
  } else {
    alert("You need to solve all puzzles before the door opens!");
  }
}

function onVideoEnd() {
  document.getElementById("vidc").style.display = "none";
}

document.getElementById("intro").addEventListener("ended", onVideoEnd);
