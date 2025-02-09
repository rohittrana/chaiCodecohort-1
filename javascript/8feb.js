const teas = ["Green Tea ","Black Tea" ,"oolong Tea","white Tea","Herbal tea"];
console.log(teas);


teas.push("Chamomile Tea");

const index = teas.indexOf("oolang Tea");
if(index >-1){
               teas.splice(index,1);
}
const caffinatedTeas = teas.filter(tea => tea!=="Herbal tea");
console.log(caffinatedTeas);

console.log(teas.sort());

for(let i =0;i<teas.length;i++){
               console.log(teas[i]);
}

let caffinatedTea = 0;
for(let i =0;i<teas.length ;i++){
               if(teas[i] !== "Herbal Tea");
               {
                              caffinatedTea ++;
               }
}


console.log(caffinatedTea);

const uppercaseTeas =[];
for(let i =0;i<teas.length;i++){
               uppercaseTeas.push(teas[i].toLocaleUpperCase());
}

console.log(uppercaseTeas);


let longestTea = "";
for(let i =0;i<teas.legnth;i++){
               if(teas[i].length > longestTea.length){
                              longestTea = teas[i];
               }
}
console.log(longestTea);

const reversedArray = [];
for(let i =0;i<teas.length-1;i--){
             reversedArray.push(teas[i]);
}
console.log(reversedArray);