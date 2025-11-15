(function() {

    // -------------------------------
    // Publisher ID
    // -------------------------------
    let pid = document.currentScript.getAttribute("data-pid") || "default";

    // -------------------------------
    // Ad links by publisher ID
    // -------------------------------
    let ads = {
        "PUB001": [
            "https://example.com/ad1",
            "https://example.com/ad2",
            "https://example.com/ad3"
        ],
        "PUB002": [
            "https://another.com/adA",
            "https://another.com/adB"
        ],
        "default": [
            "https://google.com"
        ]
    };

    // -------------------------------
    // Random Ad Link Selector
    // -------------------------------
    function getRandomAd() {
        let list = ads[pid] || ads["default"];
        return list[Math.floor(Math.random() * list.length)];
    }

    // -------------------------------
    // Popup function (Browser-safe)
    // -------------------------------
    function openPop() {
        let url = getRandomAd();

        let a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";

        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    // -------------------------------
    // 1) Page Load Popup (auto)
    // -------------------------------
    window.addEventListener("load", function() {
        setTimeout(openPop, 800); // page load এর 0.8s পরে popup
    });

    // -------------------------------
    // 2) Every Refresh Popup
    // (Already works — refresh = new load)
    // -------------------------------

    // -------------------------------
    // 3) Every 10 Seconds Popup
    // -------------------------------
    setInterval(openPop, 10000); // প্রতি 10 সেকেন্ডে popup

    // -------------------------------
    // 4) First-click Popup (extra boost)
    // -------------------------------
    document.addEventListener("click", function() {
        openPop();
    }, { once: true });

})();
