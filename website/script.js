const themeButton = document.getElementById("themeButton");
const statusText = document.getElementById("statusText");
const clock = document.getElementById("clock");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

statusText.textContent = "Aplicação em execução com Docker Compose + Apache.";

const updateClock = () => {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString("pt-BR");
};

updateClock();
setInterval(updateClock, 1000);
