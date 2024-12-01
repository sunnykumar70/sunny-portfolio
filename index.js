// Add event listener to trigger the light effect
const image = document.querySelector('.image-transition');

// Add the 'image-light' class after the page loads
window.onload = () => {
  setTimeout(() => {
    image.classList.add('image-light');
  }, 500);  // Wait 0.5 seconds before applying the light effect
};
