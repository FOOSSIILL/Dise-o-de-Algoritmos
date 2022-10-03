
const Cosas_1 =['rat', 'dog', 'cat', 'parrot', 'cat'];
const Cosas_2 = ['cat', 'lizard', 'at', 'rat'];

let check_2 = 1;

function compare(x: string[], y: string[]) {

for (let i = 0; i < x.length; i++) {

   
for (let b = 0; b < y.length; b++) {

if (x[i] !== y[b]) {
   check_2 = 2;
}
      
    }

    if (check_2  == 1 ) {
      console.log('Tiene los valores del segundo array' );
      } else {
         console.log('No tiene los valores del segundo array' );
      }


    }
   }

    compare(Cosas_1,Cosas_2);