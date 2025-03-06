let user = {
  name: "rohit",
  lastname: "rana",
  class: "10",
  age: 23,

  address: {
    hno: 1,
    address: "xyz",

    addressone: {
      hno: 143,
      address: "xy443z",
    },
    addresstwo: {
      hno: 353,
      address: "x34z",
    },
  },
};
console.log(user.address.addressone);

p1 = "rohit "
p2 ="mohit ";
console.log(p2);
console.log(p1);
// pass value refrence 


let p3={
name:"rohit"
}
let p4 =p3
p4.name="mohit"
console.log(p3);