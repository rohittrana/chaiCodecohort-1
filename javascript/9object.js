// const teas = {
//   name: "Lemon tea",
//   type: "Green ",
//   caffine: "Low",
// };

// console.log(teas["type"]);
// teas.origin = "china";
// delete teas.type;
// teas.origin = "India";
// teas.caffine = "Medium";

// delete teas.type;
// // console.log(teas);

// // console.log("origin"  in teas);

// // for (let key in teas){
// //     console.log(`${key} + : ${teas[key]}`);
// // }

// const myTeas = {
//   green_tea: {
//     name: "Green Tea",
//   },
//   black_Tea: {
//     name: "Black tea",
//   },
// };
// const teaCopy = { ...teas };
// const anotherCopy = teas;
// console.log(teaCopy);
// const obj1 = { name: "Rohit", address: { city: "Mumbai" } };

// const arr = [12,34,34,43];
// const newarr = arr.map((u)=>4*u);
// console.log(newarr);


// starting piyush sir content 

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        const result = [];
          for (let i =0;i<this.length;i++){
            if(this[i]%2 ==0){
                result.push(this[i]);
            }
          }
        return result ;
    }
}
arr = [2,3,4,5,6,7,8,9,10];
const n3 = arr.myFilter();
console.log(n3);

if(!Array.prototype.filtertwo){
    Array.prototype.myFiltertwo =function(userFn){
        const result = [];
        for(let i =0;i<this.length;i++){
            if(this[i] == "rohitrana"){
                result.push(this[i]);
            }
        }
        return result;
    }
}

const namearr = [ "rohitrana","mohitrana","chotibachi"];
const n4 = namearr.myFiltertwo();
console.log(n4);


// making protype for filter map 



