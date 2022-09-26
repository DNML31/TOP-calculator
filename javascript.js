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
    if (displayCur.textContent.length < 14) {
      displayCur.append(e.target.textContent);
    }  
  });
});

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

  } else if (displayOp.hasChildNodes() && !displayCur.hasChildNodes()) {

    displayOp.textContent = '';
    displayOp.append(x);

  } else if (displayPre.hasChildNodes() && displayCur.hasChildNodes()
    && displayOp.hasChildNodes()) {

    let num = document.createElement('div');
    num = displayCur.textContent;
    let numberB = Number(num);
      
    let operator = displayOp.textContent;
    let numberA = Number(displayPre.textContent);

    displayCur.textContent = '';
    displayOp.textContent = x;
    
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

});

equals.addEventListener('click', (e) => {
  let num = document.createElement('div');
  num = displayCur.textContent;
  let numberB = Number(num);
  
  let operator = displayOp.textContent;
  let numberA = Number(displayPre.textContent);

  displayCur.textContent = '';
  displayOp.textContent = '';

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

function byZero() {
  displayOp.textContent = '';
  displayPre.textContent = '';
  displayCur.textContent = '';
  let solution = 'hahahaha';
  displayPre.textContent = '';
  displayPre.append(solution);
}

decimal.addEventListener('click', (e) => {
  displayCur.append(e.target.textContent);
});
