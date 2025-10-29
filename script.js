// Typing animation for "Web Developer 💻"
const typingText = "Web Developer 💻";
const typingElement = document.querySelector("h2");

let i = 0;
function typeEffect() {
  if (i < typingText.length) {
    typingElement.textContent += typingText.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;

// Smooth scroll to sections
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
