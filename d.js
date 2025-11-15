(() => {
  const overlay = Object.assign(document.createElement("div"), {
    id: "blur-overlay",
    style: `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(0px);
      -webkit-backdrop-filter: blur(0px);
      background: rgba(0,0,0,0.1);
      z-index: 999999;
      cursor: pointer;
      display: block;
    `
  });

  const redirectLink = "https://valianttossczar.com/fz3ifw9n?key=255cb9b54aebe1dca0f89408b47e3fcf";
  const storageKey = "blurRedirect"; // localStorage key
  const currentTime = Date.now();

  document.body.appendChild(overlay);

  // localStorage থেকে তথ্য নাও
  const data = JSON.parse(localStorage.getItem(storageKey) || "{}");
  const lastClick = data.lastClick || 0;

  // যদি 5 সেকেন্ডের মধ্যে redirect হয়ে থাকে, overlay hide থাকবে
  if (currentTime - lastClick < 5000) {
    overlay.style.display = "none";
    // 5 সেকেন্ডের পর আবার overlay দেখাবে
    setTimeout(() => overlay.style.display = "block", 5000 - (currentTime - lastClick));
  }

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    // localStorage এ সময় সংরক্ষণ
    localStorage.setItem(storageKey, JSON.stringify({ lastClick: Date.now() }));
    window.open(redirectLink, "_blank");
  });

  // প্রতি 5 সেকেন্ডে overlay auto show
  setInterval(() => {
    overlay.style.display = "block";
  }, 5000);
})();

