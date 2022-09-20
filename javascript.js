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
const displayCurr = document.getElementById('display-current');
let numDiv = document.createElement('div');
let value;
let numberA;
let numberB;


const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
          
  number.addEventListener('click', () => {
    const numbers = document.querySelectorAll('.number');
      
    numbers.forEach((number) => {
      number.addEventListener('click', () => {
        numDiv = number.textContent;
        displayPre.append(numDiv);
        numberB = numDiv;
        console.log(numberA);
      })
    })
  })
});


const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
  operator.addEventListener('click', opBtn(operator));
});

function opBtn(x) {
  let opDiv = document.createElement('div');
  opDiv = x.textContent;
  displayOp.append(opDiv);
}


const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
  while (displayOp.hasChildNodes()) {
    displayOp.removeChild(displayOp.firstChild);
  }
  while (displayPre.hasChildNodes()) {
    displayPre.removeChild(displayPre.firstChild);
  }
  while (displayCurr.hasChildNodes()) {
    displayCurr.removeChild(displayPre.firstChild);
  }
  
  numDiv = undefined;
  numberA = undefined;
  numberB = undefined;
});


const solution = document.getElementById('equals');