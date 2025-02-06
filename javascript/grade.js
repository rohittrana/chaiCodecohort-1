let marks =67;
function gradeChecking(number){
               if(number>=90){
                              console.log('A');
               }
               else if(number<90 && number >=80){
                              console.log('B');
               }
               else if(number<80 && number >=70){
                              console.log('c');
               }
               else if(number<70 && number >=60){
                              console.log('D');
               }
               else{
                              console.log('chacha fail ho gy')
               }

}
gradeChecking(marks);