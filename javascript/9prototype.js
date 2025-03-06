// const arr =  [1,2,3,4];

// const findobject = arr.find((u)=>u === 3)
// if(findobject){
//                console.log('it is there');
// }
// else{
//                console.log("error ")
// }

// let a  = "Rohit"
//  const ina = a.indexOf('h')
// console.log(ina);
// prototype 


// . dot operator is helping us to using operator in object and variable 


// protoype 

// pollyfill function 

if(!Array.prototype.cor){
               Array.prototype.cor = function(){
                     console.log(`function has being created`)
               }
}

const arr = [23,34,3,5,45];
arr.cor();
console.log(arr);