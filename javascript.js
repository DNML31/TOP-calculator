const displayOp = document.getElementById('operation');
const displayPre = document.getElementById('display-previous');
const displayCur = document.getElementById('display-current');
const displayTopLeft = document.getElementById('op-plus');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.getElementById('clear');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');

let solution = document.createElement('div');

let numberA = '';
let numberB = '';
let operator = '';

function byZero() {
  displayOp.textContent = '';
  displayPre.textContent = '';
  displayCur.textContent = '';
  displayTopLeft.textContent = '';
  let solution = 'nope';
  displayPre.textContent = '';
  displayPre.append(solution);
  displayCur.append(solution);
  displayOp.append(solution);
}

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    sendNum(e.target.textContent);
  });
});

function sendNum(x) {

  if(!displayTopLeft.hasChildNodes()) {

    displayCur.append(x);

  } else if (displayPre.hasChildNodes() && displayCur.hasChildNodes() && 
  displayTopLeft.hasChildNodes()) {
  
    let expression = displayTopLeft.textContent + " " + x;
    displayTopLeft.textContent = '';
    displayTopLeft.append(expression);
  }
};

operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    sendOp(e.target.textContent);
  });
});

function sendOp(x) {

  if (!displayOp.hasChildNodes()) {

    displayOp.append(x);
    let operator = x;

    let num = document.createElement('div');
    num = displayCur.textContent;
    displayPre.append(num);
    let numberA = num;

    displayCur.textContent = '';

  } else if (!displayOp.hasChildNodes() && displayPre.hasChildNodes()) {

    let expression = displayCur.textContent + " " + x;
    displayCur.textContent = '';
    displayCur.append(expression);

  } else if (displayPre.hasChildNodes() && displayCur.hasChildNodes()
    && displayOp.hasChildNodes()) {

    let num = document.createElement('div');
    num = displayCur.textContent;
    let numberB = Number(num);
    
    let operator = displayOp.textContent;
    let numberA = Number(displayPre.textContent);
    
    displayOp.textContent = x;
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
      byZero();
    } 

  } else if (displayPre.hasChildNodes()) {

    let expression = displayPre.textContent + " " + x;
    displayPre.textContent = '';
    displayPre.append(expression);

  } else { 

    displayTopLeft.textContent = x;
  } 
};

clear.addEventListener('click', () => {

  let numberA = '';
  let numberB = '';
  let operator = '';

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
    if (numberB === 0) {
      byZero();
    } else {
      let solution = numberA / numberB;
      displayPre.textContent = '';
      displayPre.append(solution);
    }
  }
});

decimal.addEventListener('click', (e) => {
  displayCur.append(e.target.textContent);
});
