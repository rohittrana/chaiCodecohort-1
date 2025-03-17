let arr = [1,2,3,4,5,6,7];

const user = {
               name:"rohit",
               age:23,
               password:"12323"
}
const proxyUser = new Proxy(user,{
               // get(target,prop){
               //               if(prop === 'password'){
               //               throw new Error('access denied');
               //               }
                              
               //                return target[prop];
               // },
               // set(target,prop,user){
               //                if(prop === user.password){
               //                               throw new Error('access denied');
               //                }
               //                return target[proxy];
               // }
})

// console.log(proxyUser.password);
// console.log(proxyUser.name);

function NegativeIndex(arr){
               return new Proxy(arr,{
                     get(target,prop){
                              const index = Number(prop)
                              if(index<9){
                                             return target[target.length +index]
                              }
                              return target[index];
                     },
                     set(target ,prop,value){
                         const index = Number(prop)
                         if(index<0){
                              target[target.length+1]=value;

                         }
                        
                         else{
                              target[index] = value;
                         }
                         return true;
                     }
               })
}
let newArr = NegativeIndex(arr);

console.log(newArr[0]);