// Constants for configuration
const HEART_COUNT = 30; // Number of hearts per explosion
const ANIMATION_DURATION = 2000; // Duration of the animation in ms
const MAX_HEARTS = 100; // Maximum number of hearts in the container

// Function to trigger heart explosion
function explodeHearts() {
    const burstContainer = document.getElementById("heart-burst");
    if (!burstContainer) {
        console.error("Heart burst container not found!");
        return;
    }

    for (let i = 0; i < HEART_COUNT; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";

        // Random direction for floating
        const angle = Math.random() * 2 * Math.PI;
        const radius = 100 + Math.random() * 100;

        const x = Math.cos(angle) * radius + "px";
        const y = Math.sin(angle) * radius + "px";
        const hue = Math.floor(Math.random() * 360);

        // Set custom properties for animation
        heart.style.setProperty('--x', x);
        heart.style.setProperty('--y', y);
        heart.style.setProperty('--hue', hue);

        heart.textContent = "💖";

        // Add to the container
        burstContainer.appendChild(heart);

        // Remove heart after animation ends
        setTimeout(() => {
            heart.remove();
        }, ANIMATION_DURATION);
    }

    // Limit the number of hearts in the container
    if (burstContainer.children.length > MAX_HEARTS) {
        burstContainer.innerHTML = ''; // Clear all hearts
    }
}

// Debounce function to limit rapid clicks
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Add debounced event listeners
const debouncedExplodeHearts = debounce(explodeHearts, 500); // 500ms delay
document.querySelector('.heart-icon').addEventListener('click', debouncedExplodeHearts);
document.querySelector('.click-label').addEventListener('click', debouncedExplodeHearts);
  