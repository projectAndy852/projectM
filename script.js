const optionNao = document.getElementById('optionNao');

optionNao.addEventListener('mouseover', () => {
  const randomLeft = Math.random() * (window.innerWidth - 150);
  const randomTop = Math.random() * (window.innerHeight - 50);
  
  optionNao.style.position = 'absolute';
  optionNao.style.left = `${randomLeft}px`;
  optionNao.style.top = `${randomTop}px`;
});

optionNao.addEventListener('mouseout', () => {
  optionNao.style.position = 'initial';
});

const optionSim = document.getElementById('optionSim');
const confettiContainer = document.getElementById('confettiContainer');

optionSim.addEventListener('click', () => {
  for (let i = 0; i < 150; i++) { // Alterando o número de confetes
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = getRandomColor(); // Definindo cores aleatórias
    confetti.style.left = `${Math.random() * window.innerWidth}px`; // Posições aleatórias na tela
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duração da animação variável
    confettiContainer.appendChild(confetti);
  }

  setTimeout(() => {
    confettiContainer.innerHTML = ''; // Removendo confetes após algum tempo
  }, 5000);
});

// Função para obter cores aleatórias
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
``
