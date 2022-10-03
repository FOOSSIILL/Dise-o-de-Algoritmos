const array = ['c', 'b', 'a',1,2,5,3];
const letters = [0];
const numbers = [0];


function isNumber(n) {
  
   if (isNaN(n)) {
   letters.push(n);
} else {
   numbers.push(n);
}
      
}



function order_values(x: string[]) {
   numbers.pop();
   letters.pop();


   for (let i = 0; i < x.length; i++) {

    isNumber(x[i]);

   } 
    letters.sort();
    numbers.sort();
    console.log('alphaNumeric :' + letters + ',' + numbers );


  }

  order_values(array);