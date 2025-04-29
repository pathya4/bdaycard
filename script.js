const audio = document.getElementById("birthdayAudio");

const screen0 = document.querySelector(".screen0");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const screen3 = document.querySelector(".screen3");
const screen4 = document.querySelector(".screen4");
const screen5 = document.querySelector(".screen5");

const canvas = document.getElementById("confettiCanvas");
const confettiInstance = confetti.create(canvas, { resize: true });

document.getElementById("startBtn").addEventListener("click", () => {
  // User interaction unlocks audio
  audio.play().then(() => audio.pause()); // allow autoplay later

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
        audio.play();
        createFloatingHeartsAndStars();
      }
      seconds--;
    }, 1000);
  }, 2000);
});

document.getElementById("revealBtn").addEventListener("click", () => {
  screen3.classList.add("hidden");
  screen4.classList.remove("hidden");
});

document.getElementById("openCard").addEventListener("click", () => {
  screen4.classList.add("hidden");
  screen5.classList.remove("hidden");
  triggerConfetti();
});

function createFloatingHeartsAndStars() {
  const container = document.getElementById("floatingHeartsAndStars");

  for (let i = 0; i < 20; i++) {
    const item = document.createElement("div");
    item.className = Math.random() > 0.5 ? "heart" : "star";
    item.textContent = item.className === "heart" ? "💖" : "✨";
    item.style.left = Math.random() * 100 + "vw";
    item.style.top = Math.random() * 100 + "vh";
    item.style.animationDuration = `${3 + Math.random() * 4}s`;
    container.appendChild(item);
  }
}

function triggerConfetti() {
  confettiInstance({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}
