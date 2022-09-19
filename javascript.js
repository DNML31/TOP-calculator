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
const display = document.getElementById('display');
let numDiv = document.createElement('div');
let value;
let numberA;
let numberB;


const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {

  number.addEventListener('click', () => {

    if (display.hasChildNodes() && displayOp.hasChildNodes()) {
      while (display.hasChildNodes()) {
        display.removeChild(display.firstChild);
      };
    
      const numbers = document.querySelectorAll('.number');

      numbers.forEach((number) => {
        number.addEventListener('click', () => {
          numDiv = number.textContent;
          display.append(numDiv);
          numberB = numDiv;
          console.log(numberB);
        })
      })
    }
    numDiv = number.textContent;
    display.append(numDiv);
    numberA = numDiv;
    console.log(numberA);

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
//all operators just show up on display without click



const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
  while (displayOp.hasChildNodes()) {
    displayOp.removeChild(displayOp.firstChild);
  }
  while (display.hasChildNodes()) {
    display.removeChild(display.firstChild);
  }
  
  numDiv = undefined;
  numberA = undefined;
  numberB = undefined;
});


const solution = document.getElementById('equals');