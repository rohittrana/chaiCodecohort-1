Function.prototype.describe = function () {
  console.log(`Function is runnig`);
};

function greet(name) {
  return `my name is ${name}`;
}

greet.describe();
console.log(greet("rohit"));

function masalachai() {
  console.log("hello there my name is rohit");
}

masalachai.describe();

Function.prototype.Rohit = function (name) {
  console.log("hello there my name is rohit");
};

function Fname(name) {
  return `${this.name}`;
}
Fname.Rohit("rana");



console.log(sum(23,2));
// this is normal function

// sum function i called it is first because of hoisting - what hositing mean hositing is nothing it is just hosting meaning 
function sum(a, b) {
  return a + b;
}
// this is arrow function

sub = (a, b) => {
  return a - b;
};

//  function expresssion it is 
const multi = function (a, b) {
  return a * b;
};
console.log(sub(23, 4));

// this is called first class  function in this a,b operation are parameter 

function applyOperation(a, b, operation) {
  return operation(a, b);
}
const result = applyOperation(2,3,(x,y)=>x*y);
console.log(result);


function createCounter(){
  let count =0;
  return function(){
    count++;
    return(count);
  }
}
const counter = createCounter();
console.log(counter());
