// Constants for the elements and emojis
const proposalBox = document.getElementById('proposal-box');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

const YES_EMOJIS = ['💖', '🥰', '💍', '💘', '😍', '😘', '❤️', '🎉'];
const NO_EMOJIS = ['😭', '💔', '🥺', '😔', '😢', '😥', '☔️'];
const EMOJI_COUNT = 70; // How many emojis will fall

// Add event listeners to the buttons
yesBtn.addEventListener('click', () => handleResponse(true));
noBtn.addEventListener('click', () => handleResponse(false));

/**
 * Handles the click on the 'Yes' or 'No' button.
 * @param {boolean} isYes - True if 'Yes' was clicked, false if 'No'.
 */
function handleResponse(isYes) {
    // 1. Disable the buttons to prevent multiple clicks
    yesBtn.disabled = true;
    noBtn.disabled = true;

    // 2. Clear the proposal box content
    proposalBox.innerHTML = '';
    
    if (isYes) {
        // Display the "YES" message
        proposalBox.innerHTML = `
            <h1>🎉 💙OH MY GOD, YES! 💙🎉</h1>
            <p style="font-size: 1.5em; color: #4a4245ff; margin: 10px 0;">
                I love ❤️🥰 you so much, my fiancé 👩🏻‍❤️‍💋‍👨🏻, AJIT! This is the start of forever ♾️!
            </p>
        `;
        startEmojiRain(YES_EMOJIS);
    } else {
        // Display the "NO" message
        proposalBox.innerHTML = `
            <h1>💔 I Understand. 🥺</h1>
            <p style="font-size: 1.5em; color: #4a4a4a; margin: 10px 0;">
                My heart is heavy, but I respect your decision, AJIT. Thank you for your honesty.
            </p>
        `;
        startEmojiRain(NO_EMOJIS);
    }

    // 3. Make the central box transparent for a better rain view
    proposalBox.style.backgroundColor = 'transparent';
    proposalBox.style.boxShadow = 'none';
}

/**
 * Creates and animates the falling emojis.
 * @param {Array<string>} emojiList - The list of emojis to use for the rain.
 */
function startEmojiRain(emojiList) {
    for (let i = 0; i < EMOJI_COUNT; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        
        // Randomly select an emoji from the list
        emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];
        
        // Set random starting position (x-axis)
        emoji.style.left = `${Math.random() * 100}vw`;
        
        // Set random animation duration (speed) and delay (timing)
        const duration = Math.random() * 8 + 5; // 5 to 13 seconds
        const delay = Math.random() * 5; // 0 to 5 seconds
        
        emoji.style.animationDuration = `${duration}s`;
        emoji.style.animationDelay = `${delay}s`;
        emoji.style.opacity = 1; // Make them visible

        document.body.appendChild(emoji);
    }
}