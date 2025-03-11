const obj1= {
               fname:"rohit",
               lname:"rana",
               getfullname:function(){
                              return`${this.fname} ${this.lname}`
               }
               
}
const obj2={
               fname:"mohit",
               lname:"chouhan",
               getfullname:function(){
                              return(`${this.fname} ${this.lname}`)
               }

}

// console.log(obj1.getfullname());
// console.log(obj2.getfullname());


class Person{
               constructor(fname,lname){
                              this.fname = fname;
                              this.lname= lname;
               }
               getFullname(){
                              return(`${this.fname} ${this.lname}`)
               }
               getfirstname(){
                              const id = Math.floor(Math.random()*10);
                              return(`${id} ${this.fname}`);
               }
}

const p1= new Person('rohit','rana');
console.log(p1);
const p2 = new Person('mohit' ,'chouhan')
console.log(p2);
console.log(p1.getfirstname());
