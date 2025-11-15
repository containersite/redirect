<script>
(function() {
  const overlay = document.createElement("div");
  overlay.id = "blur-overlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backdropFilter = "blur(1px)";
  overlay.style.webkitBackdropFilter = "blur(1px)";
  overlay.style.background = "rgba(0,0,0,0.1)";
  overlay.style.zIndex = "999999";
  overlay.style.cursor = "pointer";
  overlay.style.display = "block";
  document.body.appendChild(overlay);

  const redirectLink = "https://example.com";

  overlay.addEventListener("click", function() {
    this.style.display = "none";
    window.open(redirectLink, "_blank");
  });

  setInterval(() => {
    overlay.style.display = "block";
  }, 5000);
})();
</script>
