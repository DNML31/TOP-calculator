const add = (a,b) => +a + +b;
const subtract = (a,b) => +a - +b;
const multiply = (a,b) => +a * +b;
const divide = (a,b) => +a / +b;

const operate = function () { 
  let operateObj = {};
  operateObj.a = prompt("first number?");
  operateObj.op = prompt("add? subtract? multiply? divide?");
  //how can i link the prompt answer to the object key:value?
  operateObj.b = prompt("second number?");
  
  if (operateObj.op === "add") {
    return add(operateObj.a, operateObj.b);
  } else if (operateObj.op === "subtract") {
    return subtract(operateObj.a, operateObj.b);
  } else if (operateObj.op === "multiply") {
    return multiply(operateObj.a, operateObj.b);
  } else if (operateObj.op === "divide") {
    return divide(operateObj.a, operateObj.b);
  }
}

let display = document.getElementById('display');
let numberA; //the first number needs to assigned to the 'a' in operator functions
let numberB;

//if numbers are clicked, keep reassigning value of numberA, until an operator is clicked,
const buttons = document.querySelectorAll('button'); // selecting ALL buttons
buttons.forEach((button) => {
  button.addEventListener ('click', () => {
    if (button.classList.contains('number')) {

      let char = button.textContent;  
      display.append(char);

    } else if (button.classList.contains('buttonoperator') && display.hasChildNodes() === false) { 

      return;

    } else if (display.hasChildNodes() && button.classList.contains('buttonclear')) {

      while (display.hasChildNodes()) {
        display.removeChild(display.firstChild);
      }
    
    } else if (button.classList.contains('buttonoperator') && display.hasChildNodes() === true) {

      let numberA = display;
      let op = button.textContent; // determines which operator function to use
      let operation;

      if (op === "+") {
        let operation = add();
      } else if (op === "-") {
        let operation = subtract();
      } else if (op === "*") {
        let operation = multiply();
      } else if (op === "/") {
        let operation = divide();
      }

      let char = button.textContent;
      display = display.append(char);


       return operation(numberA, numberB);

    }
  });
})


// const operators = document.querySelectorAll(".buttonoperator");
// operators.forEach((operator) => {
//   operator.addEventListener ('click', () => {
//     let op = operator.textContent;
//       //link the 'operator' to the matching function const
//     if (op === "+") {
//       add();
//     } else if (op === "-") {
//       subtract();
//     } else if (op === "*") {
//       multiply();
//     } else if (op === "/") {
//       divide();
//     }

//   })
// })


//Create a new function operate that takes an operator and 2 numbers and then 
//calls one of the above functions on the numbers.