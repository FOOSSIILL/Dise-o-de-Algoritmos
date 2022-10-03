const arreglo_a = [ 7, 4, 17, 10, 48];
const arreglo_b = [ 0];
const arreglo_c = [ 0];

function add_P(x: number) {
  arreglo_b.push(x);
  }

  function add_I(x: number){
    arreglo_c.push(x); 
  }

  function compare(x: number[]) {
    arreglo_b.pop(); 
    arreglo_c.pop(); 
    for (let i = 0; i < x.length; i++) {
      const number = x[i];
      if (number%2 == 0) {
       add_P(number);
      } else {
        arreglo_c.push(x[i]);
        add_I(number);
      }

    }
    console.log('pares :' + arreglo_b + ' impares ' + arreglo_c );

    }

  compare(arreglo_a);

  