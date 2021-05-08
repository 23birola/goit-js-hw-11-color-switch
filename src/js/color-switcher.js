const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('button[data-action="start"]');
const stoptBtn = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');

startBtn.addEventListener('click', () => {
    startBtn.setAttribute("disabled", "disabled");
    colorSwitcherInterval = setInterval(colorSwitcher, 1000);
});
stoptBtn.addEventListener('click', colorSwitcherStop);

const max = colors.length-1;
const min = 0;
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function colorSwitcher() {
    let index = randomIntegerFromInterval(min, max);
    body.style.backgroundColor = colors[index];
};

function colorSwitcherStop() {
    clearInterval(colorSwitcherInterval);
    startBtn.removeAttribute("disabled", "disabled");
}