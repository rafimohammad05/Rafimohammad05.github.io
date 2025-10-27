// Typing effect for subtitle
const typingText = "Web Developer 💻";
const typingElement = document.getElementById("typing");

let i = 0;
function typeEffect() {
  if (i < typingText.length) {
    typingElement.textContent += typingText.charAt(i);
    typingElement.style.opacity = 1;
    i++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;
