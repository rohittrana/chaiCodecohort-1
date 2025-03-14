// let name ="rohit"
// console.log(typeof(name));
// let age = 23
// console.log(typeof(age))
// let isLoggedIn = true
// console.log(typeof(isLoggedIn));

// let undefinedVar = undefined;
// console.log(typeof(undefinedVar));
// let lname = null ;
// console.log(typeof(lname));

// let symbolVar = Symbol();
// console.log(typeof(symbolVar));

// const user={
//                name:"rohit",
//                age:23,
//                college:"vit"
// }
// console.log(user);

// let num = "23"
// console.log(num);
// console.log(typeof(num));
// let convertedNum = parseInt(num);
// console.log(convertedNum);
// console.log(typeof(convertedNum));

// let str = "45";
// console.log(typeof(str));
// console.log(str);
// let convertedStr = String(str);
// console.log(typeof(convertedNum));
// console.log(convertedStr);

// let a = 10
// let b = 3;
// let sum = a+b;
// let sub = a-b;
// let mul = a*b;
// let div = a/b;

// console.log(sum)
// console.log(sub)
// console.log(mul)
// console.log(div)

// let power = a**b;
// console.log(power);
// let x =5;
// let y=10
// console.log(x==y);

// console.log(x!=y);
// console.log(x>y);
// console.log(x<y);
// console.log(x<=y);// y is greater than equal to

// console.log(Math.max(23,32));
// console.log(Math.min(2,43));

// console.log (Math.floor(Math.random()*10));

// let firstName = "rohit ";
// let secondName = "rana";
// let fullName = firstName + " " +secondName ;
// console.log(fullName);

// let YourName ="Rohit Rana";
// console.log(YourName.trimEnd());

// console.log(YourName.indexOf('R'));
// console.log(YourName.slice(0,7));

// `` this is sign of tatic which  we will use in our development

// let arr =[2,3,54,5];
// let ans = arr.map((key)=>key*3);
// console.log(ans);
// console.log(arr);
// arr.push(344);
// console.log(arr);
// arr.pop();
// console.log(arr);

// let index = arr.indexOf(2);

// console.log(index);
// if(index !== -1){

// }

// new array starting

// let car = ["volvo ", "maruti", "bmw", "mercides", "bcd", "mahindra", "volvo" ,"tesla"];

// console.log(car.length);
// let index = car.indexOf("volvo");
// console.log(index);
// if (index !== -1) {
//   car.splice(index, 1);
// }

// console.log(car);

// car.forEach((gadi,index)=>(
//                console.log(`${index +1}: ${gadi}}`)
// ))


// let moreCar = ["tata","bwd"];
// let allCar = car.concat(moreCar);
// console.log(allCar);


let arr = [23,34,433,4,34];
let newArr = arr.reduce((acc,cur,index)=>acc+cur,0);
console.log(newArr)

let userShopping = [
  {name:"rohit",item:"food",bill: 200},
  {name:"mohit",item:"utenzile",bill:2000},
  {name:"kirti",item:"food",bill:1000},
  {name:"avas",item:"utenzile",bill:200}
]

let newUser = userShopping.reduce((acc, curr) => {
  acc.bill += curr.price;  // Always add price
  return acc;
}, { bill: 0 });

console.log(newUser); // Output: { bill: 100 }
