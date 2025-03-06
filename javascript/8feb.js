const teas = [ "green Tea","harble Tea","orange Tea","black Tea","oolang Tea","masla tea" ,]
// console.log(teas);
teas.push("chamomile Tea");

const index = teas.indexOf("oolang Tea");
// console.log(index);
if(index>-1){
               teas.splice(index,1);
}

// console.log(teas);
 const cafinated = teas.filter((tea)=>tea !=="harble Tea")
console.log(cafinated);

console.log(cafinated.sort());

teas.forEach((Element,index)=>{
               console.log(`${Element} and index of element ${index}`);
})

let longtestTea = ""
for(let i =0;i<teas.length;i++){
               if(teas[i].length >longtestTea.length){
                              longtestTea = teas[i];
               }
}
console.log(longtestTea);

for(let i=teas.length-1;i>0;i--){
               console.log(teas[i]);
}

let uppercaseteas =[];
for(let i =0;i<teas.length;i++){
               uppercaseteas.push(teas[i].toUpperCase());

}
console.log(uppercaseteas);