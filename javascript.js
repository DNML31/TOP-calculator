const add = (a,b) => +a + +b;

const subtract = (a,b) => +a - +b;

const multiply = (a,b) => +a * +b;

const divide = (a,b) => +a / +b;

const operate = function (operateObj) { 
  let first = prompt("first number?");
  let second = prompt("second number?");

  return operateObj;
}

let operateObj = {
  // first: 

  // second:

  add: function() {
    add(`${this.first} + ${this.second}`);  // THIS refers to the object
  },

  subtract: function() {
    subtract(`${this.first} - ${this.second}`);
  },

  multiply: function() {
    multiply(`${this.first} * ${this.second}`);
  },

  divide: function() {
    divide(`${this.first} / ${this.second}`);
  },

};
    



//Create a new function operate that takes an operator and 2 numbers and then 
//calls one of the above functions on the numbers.