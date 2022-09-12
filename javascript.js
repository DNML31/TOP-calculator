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

let display = document.getElementById('display');
let displayOp = document.getElementById('operation');
let numberA; 
let numberB;

const buttons = document.querySelectorAll('button'); 
buttons.forEach((button) => {
  button.addEventListener ('click', () => {
    if (button.classList.contains('number')) { 
      let char = button.textContent;  
      display.append(char);

    } else if (button.classList.contains('buttonoperator') && display.hasChildNodes() === false) { 
      return;
      
    } else if (button.classList.contains('buttonclear') && display.hasChildNodes() === true) {
      while (display.hasChildNodes()) {
        display.removeChild(display.firstChild);
      }
      while (displayOp.hasChildNodes()) {
        displayOp.removeChild(displayOp.firstChild);
      }
    
    } else if (button.classList.contains('buttonoperator') && display.hasChildNodes() === true) {
      let numberA = display;
      // let op = button.textContent;
      displayOp.append(op);
      //need to limit the number of operators at a time to 1
      if (displayOp.length === 1) {
        alert("hey");
      }

      switch (op = button.textContent) {
        case "+":
          displayOp.append(op);
          add();
          break; 
        case "-":
          displayOp.append(op);
          subtract();
          break;
        case "*":
          displayOp.append(op);
          multiply();
          break;
        case "/":
          displayOp.append(op);
          divide();
          break;

      }

      console.log(numberA);
      // let char = button.textContent;
      // display.append(char);
      // let numberB = display;

    }

  });
})

//line 62 - 'numberA' is logged as individual number strings. 99 is "9" and "9"
//only one operator should be selected at max