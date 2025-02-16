const arr = [1,2,3,4,5,6,7];
// Erro : .map function does not exist on arr variable 

// real signature ko samjo 
if(!Array.prototype.myForEach){
               Array.prototype.myForEach = function(useFn){
                              const 
               }
}
arr.forEach(function(value,index){
               console.log(`value at Inde ${index} is ${value}`);
})

console.log(`Ret is `,ret);


// this is pointintg current object 
