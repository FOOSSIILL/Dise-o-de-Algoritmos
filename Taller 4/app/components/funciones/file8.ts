const words = ['Buena', 'Buena', 'Mala', 'Buena','Mala'];
let ideas = 0;


function ideal(x) {
words.forEach((x) => {

  
  if (x === 'Buena') {
    ideas ++;

  }
});

if (ideas >= 3) {
  console.log('fantastico')
}
if (ideas > 0 && ideas < 3 ) {
  console.log('publicar')
}
if (ideas <= 0) {
  console.log('fallo')
} 
}

ideal(words);