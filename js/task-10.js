const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount > 0) {
    createBoxes(amount);
  }
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxElements = [];
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10; // Increase size by 10px for each element
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxElements.push(box);
  }
  boxesContainer.append(...boxElements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Clear the contents of div#boxes
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
