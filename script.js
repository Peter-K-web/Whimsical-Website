// Constants for configuration
const ANIMATION_DURATION = 2000; // Match this with your CSS animation duration (2s)
const MAX_HEARTS = 50; // Limit the number of hearts to prevent performance issues

// Function to create and animate a heart
function createHeart(container) {
  const heart = document.createElement('div');
  heart.classList.add('heart-animation');
  heart.innerHTML = '❤️';

  // Randomize position within the container
  heart.style.left = `${Math.random() * 90}%`;
  heart.style.top = `${Math.random() * 90}%`;

  // Append the heart to the container
  container.appendChild(heart);

  // Remove the heart after the animation ends
  setTimeout(() => {
    heart.remove();
  }, ANIMATION_DURATION);
}

// Function to handle the button click
function handleButtonClick() {
  const heartBurst = document.getElementById('heart-burst');
  if (!heartBurst) {
    console.error("Heart burst container not found!");
    return;
  }

  // Limit the number of hearts in the container
  if (heartBurst.childElementCount >= MAX_HEARTS) {
    heartBurst.firstChild.remove(); // Remove the oldest heart
  }

  // Create and animate a new heart
  createHeart(heartBurst);
}

// Add event listener for the button click
const button = document.querySelector('.click-label');
if (button) {
  button.addEventListener('click', handleButtonClick);
} else {
  console.error("Button with class '.click-label' not found!");
}