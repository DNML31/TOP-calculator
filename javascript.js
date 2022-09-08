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


const numbers = document.querySelectorAll(".number"); 
numbers.forEach((number) => { 
  number.addEventListener ('click', () => { 
    const display = document.getElementById('display'); // selects the display div
    let char = number.textContent;  // char is the text content of the number that is clicked
    display.append(char); // add the number to the display div
  });
});
    



//Create a new function operate that takes an operator and 2 numbers and then 
//calls one of the above functions on the numbers.