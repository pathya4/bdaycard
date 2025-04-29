let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");
let screen3 = document.querySelector(".screen3");
let screen4 = document.querySelector(".screen4");
let screen5 = document.querySelector(".screen5");

// Audio element for birthday song
let audio = document.getElementById("birthdayAudio");

// Function to create floating hearts and stars
function createFloatingHeartsAndStars() {
  const container = document.getElementById("floatingHeartsAndStars");

  // Create hearts and stars, randomly scattered
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 4 + 3}s`; // Random speed
    container.appendChild(heart);
    
    const star = document.createElement("div");
    star.classList.add("star");
    star.textContent = "✨";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 4 + 3}s`; // Random speed
    container.appendChild(star);
  }
}

// Confetti effect
function triggerConfetti() {
  // Use canvas-confetti to trigger confetti
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = confetti.create(canvas, {
    resize: true, // Automatically resizes the canvas when window size changes
    useWorker: true // Performance optimization
  });

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.5 }
  });
}

// Timer and screen transitions
setTimeout(() => {
  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");

  let seconds = 10;
  let timer = setInterval(() => {
    document.getElementById("seconds").textContent = seconds;
    if (seconds === 0) {
      clearInterval(timer);
      screen2.classList.add("hidden");
      screen3.classList.remove("hidden");

      // Play the birthday song after the timer ends
      audio.play();
      createFloatingHeartsAndStars();  // Show floating hearts and stars
    }
    seconds--;
  }, 1000);
}, 3000);

document.getElementById("revealBtn").addEventListener("click", () => {
  screen3.classList.add("hidden");
  screen4.classList.remove("hidden");
});

document.getElementById("openCard").addEventListener("click", () => {
  screen4.classList.add("hidden");
  screen5.classList.remove("hidden");
  triggerConfetti(); // Trigger confetti after the card is revealed
});
