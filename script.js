const audio = document.getElementById("birthdayAudio");

const screen0 = document.querySelector(".screen0");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const screen3 = document.querySelector(".screen3");
const screen4 = document.querySelector(".screen4");
const screen5 = document.querySelector(".screen5");

const canvas = document.getElementById("confettiCanvas");
const confettiInstance = confetti.create(canvas, { resize: true, useWorker: true });

let audioUnlocked = false;

document.getElementById("startBtn").addEventListener("click", () => {
  // Unlock audio playback
  audioUnlocked = true;

  screen0.classList.add("hidden");
  screen1.classList.remove("hidden");

  setTimeout(() => {
    screen1.classList.add("hidden");
    screen2.classList.remove("hidden");

    let seconds = 10;
    let countdown = setInterval(() => {
      document.getElementById("seconds").textContent = seconds;
      if (seconds === 0) {
        clearInterval(countdown);
        screen2.classList.add("hidden");
        screen3.classList.remove("hidden");

        // Create floating hearts and stars
        createFloatingHeartsAndStars();
      }
      seconds--;
    }, 1000);
  }, 2000);
});

document.getElementById("revealBtn").addEventListener("click", () => {
  screen3.classList.add("hidden");
  screen4.classList.remove("hidden");

  // Play the birthday song
  if (audioUnlocked) {
    audio.currentTime = 0;
    audio.play().catch((e) => console.log("Audio play failed:", e));
  }

  // Trigger confetti on screen 4
  triggerConfetti();
});

document.getElementById("openCard").addEventListener("click", () => {
  screen4.classList.add("hidden");
  screen5.classList.remove("hidden");
  // Optional: trigger more confetti here too
  // triggerConfetti();
});

function createFloatingHeartsAndStars() {
  const container = document.getElementById("floatingHeartsAndStars");

  for (let i = 0; i < 30; i++) {
    const item = document.createElement("div");
    item.className = Math.random() > 0.5 ? "heart" : "star";
    item.textContent = item.className === "heart" ? "💖" : "✨";
    item.style.left = Math.random() * 100 + "vw";
    item.style.top = Math.random() * 100 + "vh";
    item.style.position = "absolute";
    item.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
    container.appendChild(item);
  }
}

function triggerConfetti() {
  confettiInstance({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 },
  });
}
