const animateBtn = document.getElementById('animate');
const container = document.querySelector('.container');
animateBtn.onclick = () => {
  container.classList.add('animated');
};

container.addEventListener('animationend', (e) => {
  container.classList.remove('animated');
});
