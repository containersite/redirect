// blur-redirect.js
(function() {
  // ব্লার overlay তৈরি
  const overlay = document.createElement("div");
  overlay.id = "blur-overlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backdropFilter = "blur(0px)";
  overlay.style.webkitBackdropFilter = "blur(0px)";
  overlay.style.background = "rgba(0,0,0,0.1)";
  overlay.style.zIndex = "999999";
  overlay.style.cursor = "pointer";
  overlay.style.display = "block";
  document.body.appendChild(overlay);

  const redirectLink = "https://example.com"; // এখানে তোমার লিঙ্ক বসাও

  // ক্লিক করলে ব্লার চলে যাবে এবং নতুন ট্যাবে লিঙ্ক খোলা হবে
  overlay.addEventListener("click", function() {
    this.style.display = "none";
    window.open(redirectLink, "_blank");
  });

  // প্রতি 5 সেকেন্ডে ব্লার পুনরায় দেখানো
  setInterval(() => {
    overlay.style.display = "block";
  }, 5000);
})();
