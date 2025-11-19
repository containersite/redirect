  function showLoadingAndPlay() {
    const playButton = document.querySelector('.play-button');
    const spinner = document.getElementById('loadingSpinner');

    // প্লে বাটন লুকাও, স্পিনার দেখাও
    playButton.style.display = 'none';
    spinner.style.display = 'block';

    const redirectURL = "https://bedsidemeasuring.com/gcd76ptuf?key=d7b15f1d5ba9acd918d6dc25f2c9abf5";

    // 🔹 ০.৫ সেকেন্ড পর নতুন ট্যাবে লিঙ্ক ওপেন হবে
    setTimeout(() => {
      window.open(redirectURL, "_blank");
      sessionStorage.setItem("redirected", "true");
    }, 500);

    // 🔹 স্পিনার ১ মিনিট (৬০ সেকেন্ড) পর বন্ধ হবে এবং বাটন ফিরে আসবে
    setTimeout(() => {
      spinner.style.display = 'none';
      playButton.style.display = 'flex';
      sessionStorage.removeItem("redirected");
    }, 60000); // 60000ms = 1 minute
  }

  // ট্যাব থেকে ফিরে এলে (যদি ফিরে আসে)
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && sessionStorage.getItem("redirected") === "true") {
      // কিছু না করলেও সমস্যা নেই, স্পিনার চলতেই থাকবে ১ মিনিট পর্যন্ত
    }
  });
