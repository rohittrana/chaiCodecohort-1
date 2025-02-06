let myArray =[1,4,2,3,5,6];
let anotherArray=[];

function sumfac(numbers){
               let sum =0;
               for(let i =0;i<myArray.length;i++){
                              sum = sum+myArray[i];
               }
               return `my result is ${sum}`;
}
console.log(sumfac(myArray));