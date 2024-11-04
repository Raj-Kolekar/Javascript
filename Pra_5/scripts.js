let timer;

function startCountdown() {
  if (timer) {
    clearInterval(timer);
  }

  let endDate = new Date(document.getElementById("endDate").value).getTime();

  timer = setInterval(() => {
    const now = new Date().getTime();
    const remainingTime = endDate - now;

    if (remainingTime <= 0) {
      clearInterval(timer);
      document.getElementById("timerDisplay").innerText = "TIME UP!";
      return;
    }
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById(
      "timerDisplay"
    ).innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}
