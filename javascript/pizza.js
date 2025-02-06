// let numberofGuest = 3;
// let pizzaSize ;
// if (numberofGuest <= 2) {
//                pizzaSize= 'small';
//   console.log(pizzaSize);
// } else if (numberofGuest > 2 && numberofGuest <= 5) {
//                  pizzaSize ='medium';
//                console.log(pizzaSize);
// } else {
//   pizzaSize = 'large';
//   console.log(pizzaSize);
// }
function getPizzaSize(numberOfGuests) {
               if (numberOfGuests <= 2) {
                   return 'small';
               } else if (numberOfGuests > 2 && numberOfGuests <= 5) {
                   return 'medium';
               } else {
                   return 'large';
               }
           }
           
           
           let pizzaSize = getPizzaSize(3);
           console.log(pizzaSize); 
           