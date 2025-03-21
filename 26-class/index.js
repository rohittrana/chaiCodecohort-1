const arr = [1, 2, 3, 4, 56];

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {  // Fixed loop condition
      cb(this[i], i, this); // Pass value, index, and array to the callback
    }
  };
}


const ou = arr.MyFor();
console.log(ou);

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    const result = [];
    for (let i = 0; i < this.length; i++) {  // Fixed loop condition
      result.push(cb(this[i], i, this)); // Store transformed values
    }
    return result;
  };
}

// Testing myForEach
arr.myForEach((item, index) => {
  console.log(`Element at index ${index}: ${item}`);
});

if(!Array.prototype.sum){
               Array.prototype.sum= function(cb){
                           let sum =0;
                           for(let i=0;i<this.length;i++){
                              sum +=this[i];
                           }             
                           return sum;                  
               }
}

const output= arr.sum();

console.log(output);
// Testing myMap
const doubledArr = arr.myMap((item) => item * 2);
console.log(doubledArr);
