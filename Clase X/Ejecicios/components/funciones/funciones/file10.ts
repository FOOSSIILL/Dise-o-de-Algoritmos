const dados =  2;
const resultados = [ 0];

function getRandomInt(x:number) {
  resultados.pop(); 
  for(let i = x; i>0; i--){
   const valor = Math.random()*6 + 1; 
   const text = valor.toString();
   resultados.push(parseInt(text));
  }

  console.log(resultados);
}

getRandomInt(dados);
