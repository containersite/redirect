document.addEventListener("DOMContentLoaded", function () {

    // Inject CSS
    const style = document.createElement("style");
    style.innerHTML = `
        .blur-box {
            width: 100%;
            max-width: 600px;
            margin: 40px auto;
            padding: 20px;
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 15px;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            border: 1px solid rgba(255,255,255,0.2);
        }

        .blur-box h2 {
            margin-bottom: 10px;
        }

        .blur-box p {
            opacity: 0.9;
            margin-bottom: 20px;
        }

        .blur-btn {
            padding: 12px 18px;
            background: #ff3e3e;
            color: #fff;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
        }

        .blur-btn:hover {
            background: #d62828;
        }
    `;
    document.head.appendChild(style);

    // Inject HTML
    const box = document.createElement("div");
    box.className = "blur-box";
    box.innerHTML = `
        <h2>Special Content</h2>
        <p>এই কনটেন্টটি ব্লার করা আছে। নিচের বাটনে ক্লিক করে দেখুন!</p>
        <button class="blur-btn" id="openLinkBtn">কনটেন্ট দেখুন</button>
    `;
    document.body.appendChild(box);

    // Button Click → Open Link
    document.getElementById("openLinkBtn").addEventListener("click", function () {
        window.open("https://example.com", "_blank");
    });

});
