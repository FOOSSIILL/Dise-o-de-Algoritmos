const palabras_1 =['rat', 'dog', 'cat', 'parrot', 'cat'];
const palabras_2 = ['cat', 'lizard', 'at', 'rat'];
const palabras_3 = [''];
let check = 1;

  function compare(x: string[], y: string[]) {

    palabras_3.pop(); 

    for (let i = 0; i < x.length; i++) {
      const number = x[i];

for (let b = 0; b < y.length; b++) {

if (x[i] === y[b]) {
   for (let c = 0; c < palabras_3.length; c++) {
      if (x[i] === palabras_3[c]) {

          check = 2;
      }
   }
      if (check  == 1 ) {
      palabras_3.push(x[i]);
      }
      check = 1;
      }
}
      
     console.log(number);

    }
    console.log(palabras_3 );

    }
    

    compare(palabras_1,palabras_2);