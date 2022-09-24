const palabras_1 =['rat', 'dog', 'cat', 'parrot', 'cat'];
const palabras_2 = ['cat', 'lizard', 'at', 'rat'];
const palabras_3 = [''];


  function compare(x: string[], y: string[]) {

    palabras_3.pop(); 

    for (let i = 0; i < x.length; i++) {
      const number = x[i];

for (let b = 0; b < y.length; b++) {

if (x[i] === y[b]) {


       palabras_3.push(x[i]);
      }
}
      
     console.log(number);

    }
    console.log(palabras_3 );

    }
    

    compare(palabras_1,palabras_2);