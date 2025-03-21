//lexical scope and clouser

let name = "rohit";
function Pratice() {
  let name = "hitesh";

  function yourName() {
    let name = "mohit";
    console.log(`${name} `);
  }
  console.log(`your name is ${name}`);
  yourName();
}
Pratice();
