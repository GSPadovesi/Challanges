const countdownDiv = document.querySelector('.countdown');
const gridDiv = document.querySelector('.grid');
const button = document.querySelector('.button');
const selectDiv = document.querySelector('.select');

let itemDiv;
let matrix = []; 
let isTime = 5;
let isRunning = false;

const generateMatrix = (size) => {
  const newMatrix = [];
  let count = 1;
  gridDiv.innerHTML = '';
  gridDiv.style.gridTemplateColumns = `repeat(${size}, 60px)`;
  
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      row.push(count);
      gridDiv.innerHTML += `<div class="item">${count}</div>`;
      count++;
    }
    newMatrix.push(row);  
  }

  itemDiv = document.querySelectorAll('.item');
  return newMatrix;
};

matrix = generateMatrix(selectDiv.value);

selectDiv.addEventListener('change', (e) => {
  matrix = generateMatrix(e.target.value);
});

function snail(matrix) {
  const result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) result.push(matrix[top][i]);
    top++;
    for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
    right--;
    for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
    bottom--;
    for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
    left++;
  }
  return result;
}

function highlightItem(index) {
  itemDiv.forEach((item) => item.classList.value = 'item');
  const itemToHighlight = itemDiv[index - 1];
  if (itemToHighlight) itemToHighlight.classList.add('highlight');
}

countdownDiv.textContent = `Clique no botão para iniciar ⏳`;
button.textContent = 'Iniciar Contagem';

button.addEventListener('click', () => {
  countdown();
  button.disabled = true;
});

function countdown() {
  const snailOrder = snail(matrix);
  isRunning = true;

  if (isTime > 0) {
    countdownDiv.textContent = `⏳ ${isTime}`;
    countdownDiv.style.backgroundColor = `hsl(${isTime * 60}, 70%, 60%)`;
    isTime--;
    setTimeout(countdown, 1000);
  } else {
    countdownDiv.textContent = `Iniciando snail...`;

    snailOrder.forEach((value, index) => {
      setTimeout(() => highlightItem(value), index * 500);
    });

    setTimeout(() => {
      isRunning = false;
      button.disabled = false;
      button.textContent = 'Reiniciar Contagem';
      countdownDiv.textContent = '✅ Concluído!';
      isTime = 5;
      itemDiv.forEach((item) => item.classList.remove('highlight'));
    }, snailOrder.length * 500 + 1000);
  }
}