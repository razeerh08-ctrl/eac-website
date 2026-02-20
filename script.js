let progress = 0;
let progressBar = document.getElementById("progress");
let percentText = document.getElementById("percent");
let loadingText = document.getElementById("loading-text");

let loadingInterval = setInterval(() => {
  progress++;

  progressBar.style.width = progress + "%";
  percentText.textContent = progress + "%";

  // Ganti teks berdasarkan progress
  if (progress < 30) {
    loadingText.textContent = "Menghubungkan ke Observatorium...";
  } else if (progress < 70) {
    loadingText.textContent = "Memuat Data Kosmik...";
  } else if (progress < 100) {
    loadingText.textContent = "Menyiapkan Sistem...";
  } else {
    loadingText.textContent = "Sistem Siap.";
  }

  // Kalau sudah 100%
  if (progress >= 100) {
    clearInterval(loadingInterval);

    setTimeout(() => {
      document.getElementById("loading-screen").style.opacity = "0";

      setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("welcome").classList.remove("hidden");
        document.body.style.overflow = "auto";
      }, 1000);

    }, 500);
  }

}, 40);


// Tombol masuk sistem
function enterSystem() {
  window.location.href = "sistem.html";
}
