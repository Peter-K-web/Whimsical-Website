// Function to trigger heart explosion
function explodeHearts() {
    const burstContainer = document.getElementById("heart-burst");
  
    for (let i = 0; i < 30; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      
      // Random direction for floating
      const angle = Math.random() * 2 * Math.PI;
      const radius = 100 + Math.random() * 100;
  
      const x = Math.cos(angle) * radius + "px";
      const y = Math.sin(angle) * radius + "px";
      const hue = Math.floor(Math.random() * 360);
  
      heart.style.setProperty('--x', x);
      heart.style.setProperty('--y', y);
      heart.style.setProperty('--hue', hue);
  
      heart.textContent = "💖";
  
      // Add to the container
      burstContainer.appendChild(heart);
  
      // Remove heart after animation
      setTimeout(() => {
        heart.remove();
      }, 1000);
    }
  
    // Show the love message
    const message = document.getElementById("love-message");
    message.style.opacity = 1;
  }
  