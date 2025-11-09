(function() {
  let canRedirect = true;
  const redirectURL = 'https://zmistar.blogspot.com/';

  function triggerRedirect(e) {
    if (!canRedirect) return;
    canRedirect = false;
    setTimeout(() => {
      window.location.href = redirectURL;
    }, 2000);
    setTimeout(() => {
      canRedirect = true;
    }, 0);
  }

  function attachEvents() {
    document.addEventListener('click', triggerRedirect, {passive: true});
    document.addEventListener('touchstart', triggerRedirect, {passive: true});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachEvents);
  } else {
    attachEvents();
  }
})();
