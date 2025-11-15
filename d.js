// Popup Ad Script
function initPopupAd() {
    // Create popup elements
    const popupHTML = `
        <div class="popup-overlay" id="popupAd">
            <div class="popup-content">
                <button class="close-btn" id="closePopup">&times;</button>
                <h3>বিশেষ অফার!</h3>
                <img src="https://via.placeholder.com/350x200" alt="Advertisement" class="popup-image">
                <p>আমাদের এক্সক্লুসিভ ডিসকাউন্ট পান</p>
                <button class="cta-button" id="visitBtn">এখনই কিনুন</button>
                <br>
                <small>এই বিজ্ঞাপন বন্ধ করতে X বাটনে ক্লিক করুন</small>
            </div>
        </div>
    `;
    
    // Add CSS
    const style = document.createElement('style');
    style.textContent = `
        .popup-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            z-index: 9999;
        }
        
        .popup-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            max-width: 400px;
            width: 90%;
        }
        
        .close-btn {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 24px;
            cursor: pointer;
            background: none;
            border: none;
        }
        
        .popup-image {
            max-width: 100%;
            height: auto;
            border-radius: 5px;
        }
        
        .cta-button {
            background: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }
    `;
    
    document.head.appendChild(style);
    document.body.insertAdjacentHTML('beforeend', popupHTML);
    
    // Show popup after delay
    setTimeout(() => {
        document.getElementById('popupAd').style.display = 'block';
    }, 3000);
    
    // Event listeners
    document.getElementById('closePopup').addEventListener('click', closePopup);
    document.getElementById('visitBtn').addEventListener('click', visitWebsite);
    document.getElementById('popupAd').addEventListener('click', function(e) {
        if (e.target === this) closePopup();
    });
}

function closePopup() {
    document.getElementById('popupAd').style.display = 'none';
}

function visitWebsite() {
    window.open('https://your-website.com', '_blank');
    closePopup();
}

// Initialize when page loads
window.addEventListener('load', initPopupAd);
