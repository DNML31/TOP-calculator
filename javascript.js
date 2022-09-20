const add = (a,b) => +a + +b;
const subtract = (a,b) => +a - +b;
const multiply = (a,b) => +a * +b;
const divide = (a,b) => +a / +b;

// const operate = function () { 
//   let operateObj = {};
//   operateObj.a = prompt("first number?");
//   operateObj.op = prompt("add? subtract? multiply? divide?");
//   //how can i link the prompt answer to the object key:value?
//   operateObj.b = prompt("second number?");
  
//   if (operateObj.op === "add") {
//     return add(operateObj.a, operateObj.b);
//   } else if (operateObj.op === "subtract") {
//     return subtract(operateObj.a, operateObj.b);
//   } else if (operateObj.op === "multiply") {
//     return multiply(operateObj.a, operateObj.b);
//   } else if (operateObj.op === "divide") {
//     return divide(operateObj.a, operateObj.b);
//   }
// }
        
const displayOp = document.getElementById('operation');
const displayPre = document.getElementById('display-previous');
const displayCur = document.getElementById('display-current');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.getElementById('clear');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');

let numberA = '';
let numberB = '';


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

function sendOp(x) {
  if(x.length = 1) {
    displayOp.append(x);
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
});

equals.addEventListener('click', (e) => {

})