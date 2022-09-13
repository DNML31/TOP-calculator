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

let displayOp = document.getElementById('operation');
let displayA = document.getElementById('display');
let displayB = document.getElementById('display');
let numberA; 
let numberB;

// const buttons = document.querySelectorAll('button'); 
// buttons.forEach((button) => { 
//   button.addEventListener ('click', () => {
//     if (button.classList.contains('number')) { 
//       let numberA = button.textContent;
//       displayA.append(numberA);

//     } else if (button.classList.contains('buttonoperator') && displayA.hasChildNodes() === false) { 
//       return;
      
//     } else if (button.classList.contains('buttonclear') && displayA.hasChildNodes() === true) {
//       while (displayA.hasChildNodes()) {
//         displayA.removeChild(displayA.firstChild);
//       }
//       while (displayOp.hasChildNodes()) {
//         displayOp.removeChild(displayOp.firstChild);
//       }
//     }
    
//     if (button.classList.contains('buttonoperator') && displayA.hasChildNodes() === true) {
//       let numberA = displayA.textContent;
//       let op = button.textContent;
//       displayOp.append(op);
//       //need to limit the number of operators at a time to 1
//     } else if (button.classList.contains('buttonoperator') && displayOp.hasChildNodes() === true) {
//       while (displayOp.hasChildNodes()) {
//         displayOp.removeChild(displayOp.firstChild);
//       }
//       displayOp.append(op);
//     }

//     if (button.classList.contains('number') && displayOp.hasChildNodes() && displayA.hasChildNodes()) {
//       let numberB = displayB.textContent;
//       // let char = button.textContent;
//       displayB.append(numberB);
//     }
//   });
// })
//try manipulating event listeners (adding, taking off, assigning new event listeners)

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener ('click', () => {
    let numberA = number.textContent;
    displayA.append(numberA);
  
  if (displayOp.hasChildNodes() && displayA.hasChildNodes()) {
    while (displayA.hasChildNodes()) {
      displayA.removeChild(displayA.firstChild);
    }

    let numberB = number.textContent;
    displayB.append(numberB);
    //only able to take one digit because of the if statement above
  }

  

})
  

});

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
  operator.addEventListener ('click', () => {
    if (displayA.hasChildNodes() === true) {
      let op = operator.textContent;
      displayOp.append(op);
    }
    
    // while (displayA.hasChildNodes()) {
    //   displayA.removeChild(displayA.firstChild);
    // }
  })
});

const clearButton = document.querySelector('.buttonclear');
clearButton.addEventListener('click', () => {
  while (displayA.hasChildNodes() === true) {
    displayA.removeChild(displayA.firstChild);
  }

  while (displayOp.hasChildNodes() === true) {
    displayOp.removeChild(displayOp.firstChild);
  }
});