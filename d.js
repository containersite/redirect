(function() {
    let pid = document.currentScript.getAttribute("data-pid");
    let popURL = "https://example.com";   // এখানে তোমার popunder link দেবে
    let delay = 400;                      // 400ms delay
    let opened = false;

    // Frequency: প্রতি 24 ঘণ্টায় 1 বার popunder
    function canShow(pid) {
        let t = localStorage.getItem("pop_" + pid);
        if (!t) return true;
        return (Date.now() - parseInt(t)) > 86400000;
    }

    function setShown(pid) {
        localStorage.setItem("pop_" + pid, Date.now());
    }

    function openPop() {
        if (opened) return;
        opened = true;

        // Try default open
        let w = window.open(popURL, "_blank");

        // If blocked → fallback trick
        if (!w) {
            let a = document.createElement("a");
            a.href = popURL;
            a.target = "_blank";
            document.body.appendChild(a);
            a.click();
            a.remove();
        }

        setShown(pid);
    }

    document.addEventListener("click", function() {
        if (!opened && canShow(pid)) {
            setTimeout(openPop, delay);
        }
    });

})();
