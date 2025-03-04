obj1 = {
               name :"rohit",
               lname:"Rana",
 getFullName  :function (){
               return `${this.name} ${this.lname}`;
              }
}
obj2 = {
               name :"kirat ",
               lname:"singh",

               getFullName: function (){
                              return` ${this.name} ${this.lname}`
               }
}
console.log(obj1.getFullName());
console.log(obj2.getFullName());