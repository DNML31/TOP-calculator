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
let value;
let numberA;
let numberB;

// const buttons = document.querySelectorAll('button'); 
// buttons.forEach((button) => { 
//   button.addEventListener ('click', () => {

//     if (button.classList.contains('number')) { 
//       let numberA = button.textContent;
//       display.append(numberA);

//     } else if (button.classList.contains('operator') && display.hasChildNodes()) { 
//       return;
      
//     } else if (button.classList.contains('buttonclear') && display.hasChildNodes()) {
//       while (display.hasChildNodes()) {
//         display.removeChild(display.firstChild);
//       }
//       while (displayOp.hasChildNodes()) {
//         displayOp.removeChild(displayOp.firstChild);
//       }
//     }
    
//     if (button.classList.contains('operator') && display.hasChildNodes()) {
//       let numberA = display.textContent;
//       let op = button.textContent;
//       displayOp.append(op);
//       //need to limit the number of operators at a time to 1
//     } else if (button.classList.contains('operator') && displayOp.hasChildNodes()) {
//       while (displayOp.hasChildNodes()) {
//         displayOp.removeChild(displayOp.firstChild);
//       }
//       displayOp.append(op);
//     }

//     if (button.classList.contains('number') && displayOp.hasChildNodes() && display.hasChildNodes()) {
//       let numberB = display.textContent;
//       display.append(numberB);
//     }
//   });
// })


const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener ('click', () => {
    let numDiv = document.createElement('div');
    numDiv = number.textContent;
    display.append(numDiv);

    let numberA = numDiv;
    console.log(numberA);

    if (displayOp.hasChildNodes()) {
      display.removeChild(numDiv);
      let numDiv = document.createElement('div');
      numDiv = number.textContent;
      display.append(numDiv);

      let numberB = numDiv;
      console.log(numberB);

    } else if (display.hasChildNodes() && displayOp.hasChildNodes()) {
      let numDiv = document.createElement('div');
      value = number.textContent;
      display.append(value);
    }
  })


});
//add numbers to a value when clicked
//if an operator button has been clicked, add them to another value


const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
  operator.addEventListener ('click', () => {
    let O = document.createElement('div');
    O = operator.textContent;
    displayOp.append(O);
  })
  if (display.hasChildNodes()) {
    value = numberA;
  }
})

if (displayOp.hasChildNodes()) {
  operator.removeEventListener('click', () => {
    let O = document.createElement('div');
    O = operator.textContent;
    displayOp.append(O);
  })
}

const solution = document.getElementById('equals');
//run the function of the operator that was chosen with the two values


// const clearButton = document.getElementById('clear');
// clearButton.addEventListener('click', () => {
//   while (display.hasChildNodes()) {
//     display.removeChild(display.firstChild);
//   }

//   while (displayOp.hasChildNodes()) {
//     displayOp.removeChild(displayOp.firstChild);
//   }
// });
