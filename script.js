
let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");
let screen3 = document.querySelector(".screen3");
let screen4 = document.querySelector(".screen4");
let screen5 = document.querySelector(".screen5");

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
});
