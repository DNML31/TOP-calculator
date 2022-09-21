const add = (numberA, numberB) => +numberA + +numberB;
const subtract = (numberA, numberB) => +numberA - +numberB;
const multiply = (numberA, numberB) => +numberA * +numberB;
const divide = (numberA, numberB) => +numberA / +numberB;

const displayOp = document.getElementById('operation');
const displayPre = document.getElementById('display-previous');
const displayCur = document.getElementById('display-current');

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
  displayCur.append(x);
}

operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    sendOp(e.target.textContent);
  });
});
//operator button still needs to be limited to one at a time

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
    displayOp.textContent = x;
  }
}

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
  }
})

decimal.addEventListener('click', () => {
  //need to be able to use decimal button
})