(function () {

    let pid = document.currentScript.getAttribute("data-pid");
    let popURL = "https://example.com";   // ⬅ এখানে তোমার পপআন্ডার লিংক দেবে
    let delay = 300;
    let opened = false;

    /* ---------------------------------
       Frequency Control OFF
       দিনে যতবার ক্লিক হবে ততবার popunder open হবে
    ----------------------------------- */

    function openPop() {
        opened = true;

        let win = window.open(popURL, "_blank");

        if (!win) {
            // Popup Blocked → fallback click trick
            let a = document.createElement("a");
            a.href = popURL;
            a.rel = "nofollow noreferrer";
            a.target = "_blank";
            document.body.appendChild(a);
            a.click();
            a.remove();
        }
    }

    /* ---------------------------------
       BACK TAB TRICK (Bypass)
    ----------------------------------- */
    function backTabTrick() {
        let bait = window.open("about:blank", "_blank");

        if (bait) {
            bait.blur();
            window.focus();
            setTimeout(() => {
                try {
                    bait.location = popURL;
                } catch (e) {}
            }, 400);
        }
    }

    /* ---------------------------------
       Click Listener: প্রতি ক্লিকে Popunder
    ----------------------------------- */
    document.addEventListener("click", function () {

        opened = false;

        // প্রথমে back tab
        backTabTrick();

        // তারপর real popunder
        setTimeout(openPop, delay);

    });

})();
