let p1={
               fname:'Rohit'
}
let p2= p1;

p2.fname = 'Rana';
console.log(p2);

let fname1= 'rohit';
let fname2 = fname1;
fname2 = 'Rana';
console.log(fname1);
console.log(fname2);


// this is not changing becuase of memory stack and heap memory  

// stack memory can not change  

// in heap you can change it 

// shallow  copy

// pass by value
// pass by reference 