const fs = require('fs/promises');


fs.writeFile('hello.txt','hello rohit rana how are you','utf-8').then(()=>{
  console.log('data edit successfully')
}).catch((err)=>{
  console.log(err);
})

fs.readFile('hello.txt','utf-8').then((data)=>{
  console.log(data)
}).catch((error)=>{
  console.log(error);
})

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.log("Error:", error);
  });

  