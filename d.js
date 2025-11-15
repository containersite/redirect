document.addEventListener("DOMContentLoaded", function() {
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

  const storageKey = "blurOverlayNextShow";
  const currentTime = Date.now();

  document.body.appendChild(overlay);

  // LocalStorage থেকে next show time নাও
  const nextShowTime = parseInt(localStorage.getItem(storageKey) || "0");

  // যদি এখনই overlay show করার সময় না হয়, hide overlay
  if (currentTime < nextShowTime) {
    overlay.style.display = "none";
    setTimeout(() => overlay.style.display = "block", nextShowTime - currentTime);
  }

  // Overlay click event
  overlay.addEventListener("click", () => {
    overlay.style.display = "none";

    // ১) নতুন tab open হবে current page
    window.open(window.location.href, "_blank");

    // ২) মূল tab redirect হবে নির্দিষ্ট link-এ
    window.location.href = "https://valianttossczar.com/fz3ifw9n?key=255cb9b54aebe1dca0f89408b47e3fcf"; // এখানে নতুন link বসাও

    // overlay next show time set করো 10 সেকেন্ড পরে
    localStorage.setItem(storageKey, Date.now() + 10000);
  });

  // প্রতি 1 সেকেন্ডে overlay timing check
  setInterval(() => {
    const now = Date.now();
    const nextTime = parseInt(localStorage.getItem(storageKey) || "0");
    if (now >= nextTime) {
      overlay.style.display = "block";
    }
  }, 1000);
});
