const fs = require('fs');

const crypto = require('crypto')
setTimeout(()=>console.log('set Timeout'),0);
setImmediate(()=>console.log('set Immediate'));
fs.readFile('sample.txt','utf-8',function(err,data){
               setTimeout(()=>console.log('set Timeout inSide FS'),0);
               setImmediate(()=>console.log('Immediate  inside FS 1 '));


               crypto.pbkdf2('password','salt1',10000,1024,'sha512',(err,data)=>{
                              console.log()
               })
})

console.log('hello');