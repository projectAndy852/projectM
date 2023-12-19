const optionNao = document.getElementById('optionNao');

optionNao.addEventListener('touchstart', (event) => {
  const randomLeft = Math.random() * (window.innerWidth - 150);
  const randomTop = Math.random() * (window.innerHeight - 50);

  optionNao.style.position = 'absolute';
  optionNao.style.left = `${randomLeft}px`;
  optionNao.style.top = `${randomTop}px`;
  
  event.preventDefault(); // Impede o comportamento padrão do toque (scroll, zoom, etc.)
});

optionNao.addEventListener('touchend', () => {
  optionNao.style.position = 'initial';
});

const optionSim = document.getElementById('optionSim');
const confettiContainer = document.getElementById('confettiContainer');

optionSim.addEventListener('click', () => {
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.left = `${Math.random() * window.innerWidth}px`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confettiContainer.appendChild(confetti);
  }

  setTimeout(() => {
    confettiContainer.innerHTML = '';
  }, 5000);
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
