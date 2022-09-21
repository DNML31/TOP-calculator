const displayOp = document.getElementById('operation');
const displayPre = document.getElementById('display-previous');
const displayCur = document.getElementById('display-current');
const displayTopLeft = document.getElementById('top-left');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.getElementById('clear');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');

let solution = document.createElement('div');

let numberA = '';
let numberB = '';
let operator = '';


numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    sendNum(e.target.textContent);
  });
});

function sendNum(x) {
  if(!displayTopLeft.hasChildNodes()) {
    displayCur.append(x);
  }
  
};

operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    sendOp(e.target.textContent);
  });
});

function sendOp(x) {

  if(!displayOp.hasChildNodes()) {
    displayOp.append(x);
    let operator = x;

    let num = document.createElement('div');
    num = displayCur.textContent;
    displayPre.append(num);
    let numberA = num;

    displayCur.textContent = '';
  } else {
    displayTopLeft.textContent = x;
  }
};

clear.addEventListener('click', () => {
  while (displayOp.hasChildNodes()) {
    displayOp.removeChild(displayOp.firstChild);
  }
  while (displayPre.hasChildNodes()) {
    displayPre.removeChild(displayPre.firstChild);
  }
  while (displayCur.hasChildNodes()) {
    displayCur.removeChild(displayCur.firstChild);
  }
  while (displayTopLeft.hasChildNodes()) {
    displayTopLeft.removeChild(displayTopLeft.firstChild);
  }

  let numberA = '';
  let numberB = '';
  let operator = '';

});

equals.addEventListener('click', (e) => {

  let num = document.createElement('div');
  num = displayCur.textContent;
  let numberB = Number(num);
  
  let operator = displayOp.textContent;
  let numberA = Number(displayPre.textContent);
  
  displayOp.textContent = '';
  displayCur.textContent = '';
  
  if (operator === '+') {
    let solution = numberA + numberB;
    displayPre.textContent = '';
    displayPre.append(solution);
  } else if (operator === '-') {
    let solution = numberA - numberB;
    displayPre.textContent = '';
    displayPre.append(solution);
  } else if (operator === '*') {
    let solution = numberA * numberB;
    displayPre.textContent = '';
    displayPre.append(solution);
  } else if (operator === '/') {
    let solution = numberA / numberB;
    displayPre.textContent = '';
    displayPre.append(solution);
  } else if (operator === '/' && numberB === 0) {
    displayPre.textContent = 'nope';
    displayCur.textContent = 'nope';
  }
});

decimal.addEventListener('click', (e) => {
  displayCur.append(e.target.textContent);
});



//how to limit only one decimal?
//displayPre keeps showing "Infinity" and not the messages when dividing by 0
//need to be able to do maths like 3 + 4 - 5 / 1 etc.