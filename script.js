window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("guessModal");
  const submitBtn = document.getElementById("submitGuess");
  const guessInput = document.getElementById("guessInput");
  const supportButton = document.querySelector(".support-me");
  const broomstick = document.getElementById("broomstick");

  const targetNum = Math.floor(Math.random() * 5) + 1;
  console.log("Target number:", targetNum);

  // Show modal & hide support button at start
  modal.style.display = "flex";
  supportButton.style.opacity = "0";
  supportButton.style.pointerEvents = "none";

  // Core logic for guessing
  function handleGuess() {
  guessInput.blur(); // 👈 hides the keyboard on mobile

  const guess = parseInt(guessInput.value);
  if (!guess || guess < 1 || guess > 5) {
    setTimeout(() => {
      alert("Wrong! Come on Muggle, you can only input numbers. Guess a number between 1 and 5.");
    }, 100); // delay helps Safari/Chrome mobile hide keyboard
    return;
  }

  if (guess === targetNum) {
    setTimeout(() => {
      alert("Great job, wise Wizard! You may now enter the Numerology classroom!");
      modal.style.display = "none";
      supportButton.style.opacity = "1";
      supportButton.style.pointerEvents = "auto";
      broomstick.classList.add("fly");
    }, 100);
  } else if (guess > targetNum) {
    setTimeout(() => {
      alert("Too high, Muggle! Enter a new number between 1 and 5:");
    }, 100);
  } else {
    setTimeout(() => {
      alert("Too low, Mudblood! Enter a new number between 1 and 5:");
    }, 100);
  }
}
  // Submit on button click
  submitBtn.addEventListener("click", handleGuess);

  // Submit on Enter key
  guessInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleGuess();
    }
  });
});

// Sorting hat input check
function checkInput() {
  const input = document.getElementById("userInput").value.trim();
  if (input === "Gryffindor") {
    alert("Correct, Warlock (or Witch)! Welcome to Gryffindor House!");
  } else {
    alert("Sorry Muggle, that's not the right answer (hint: the correct house's mascot is a Lion 🦁).");
  }
}
