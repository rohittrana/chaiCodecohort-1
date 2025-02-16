const teas ={
               name:"Lemon tea",
               type:"Green ",
               caffine:"Low",
}

console.log(teas["type"]);
teas.origin ="china"
delete teas.type
teas.origin = "India";
teas.caffine = "Medium";


delete teas.type;
// console.log(teas);

// console.log("origin"  in teas);

// for (let key in teas){
//     console.log(`${key} + : ${teas[key]}`);
// }


const myTeas = {
    green_tea:{
        name:"Green Tea"
     },
    black_Tea:{
        name:"Black tea"
    }
}
const teaCopy = {...teas};
const anotherCopy = teas
console.log(teaCopy);
const obj1 = { name: "Rohit", address: { city: "Mumbai" } };

