let userInfo = {};
console.log(userInfo.name);
console.log(userInfo.skills);
// console.log(userInfo);

let user = [
  {
    name: "rohit",
    lastName: "rana",
    isPaid: true,
    skills: ["js", "css", "html"],
  },
  {
    name: "kavita",
    lastName: "rana",
    isPaid: true,
    skills: ["cpp", "css", "html"],
  },
  {
    name: "mohit",
    lastName: "rana",
    isPaid: true,
    skills: ["csharp", "css", "html"],
  },
  {
    name: "trump",
    lastName: "rana",
    isPaid: true,
    skills: ["js", "css", "html"],
  },
];
function add(a , b){
               return a+b;
}
console.log(typeof(add));

console.log(typeof(user.name));
let userR = user.map((nam) => nam.name);
let sk = user.map((skill)=>skill.skills);
console.log(sk);
console.log(userR);