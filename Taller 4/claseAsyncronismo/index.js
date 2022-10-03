/*Qué es el asincronismo? 

JavaScript es un lenguaje de programación asincrono. Lo que quiere decir esto es que al ejecutar código JavaScript el hilo de ejecución continuará a pesar de encontrarse en situaciones en las que no obtenga un resultado inmediatamente.

Cuando hacemos el pedido de información a un servidor, la respuesta posiblemente demore un poco. Sin embargo, el hilo de ejecución de JavaScript continuará con las demás tareas que hay en el código.

Para solucionar esto algunas funciones de JavaScript tienen como parametro algo que se conoce como callback
*/

// Callbacks
// Un callback es simplemente una función que se pasa como parametro a otra funcion.

function saludar(saludo){
    saludo();
}

saludar(function(nombre) {
    console.log(`Hola ${nombre}`)
})

// Una función en JavaScript que tiene un callback es el setTimeout(). Esta función ejecuta el callback despúes de esperar cierto tiempo el cual también le pasamos como parámetro.

setTimeout(function(){
    console.log('Hola')
}, 2000);

//Veamos como funciona el asincronismo en Javascript
// Usando función anonima
console.log('A')
setTimeout(function () {
    console.log('B')
}, 2000)
console.log('C')

// Para tener un cierto control en el código asincrono de JavaScript existen las promesas

// Promesas
// Una promesa es el objeto que representa un valor que estará disponeble ahora, en el futuro o quiza nunca. Entonces como no sabemos cuando estarán disponibles. Por esta razón dejamos preparado dentro de la promesa el código que se ejecutará cuando el resultado llegue o incluso cuando el resultado es un error.

let  x = 11
const p = new Promise((resolve, reject) =>{
    if(x == 10){
        resolve('La variable es igual a 10');
    }else{
        reject('La variable no es igual a 10');
    }
});

// Resolve es una función que recibe como parametro el objeto que queremos que devuelva cuando el código tuvo el resultado que esperamos.

// Reject es una función que toma como parametro el objeto que devolverá si obtenemos un error, en nuestro código asincronico.

let mensaje = new Promise((resolve, reject)=>{
    setTimeout(function () {
        resolve('Este es el mensaje');
    }, 2000);
});

mensaje.then(m =>{
    console.log(m)  
}).catch(function () {
    console.log('error');
});

//Entonces para capturar el resultado favorable de la promesa usamos then(). Por otra parte el catch captura el resultado fallido o reject de la promesa. 

// El método fetch
// Este método nos permite hacer una petición a un API y es justamente un callback. Por lo que tenemos que recibirlo usando then y catch de la siguiente forma.

const pokemons = fetch("https://pokeapi.co/api/v2/pokemon/1");

pokemons
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data.name);
    }).catch(error => console.log(error))

// Este codigo podemos verlo de una manera más desglosada
let pokemones = fetch("https://pokeapi.co/api/v2/pokemon/12");

// segunda promesa
let respuesta = pokemones.then(res => {return res.json()});

respuesta.then(data => {
    console.log(data.name);
})

//  Async Await
// Usamos el async para definir una función donde se encontrará el await que nos permitirá esperar una promesa de tal forma que podamos volver nuestro código sincrono.

function obtener_pokemon(id){
    let url = "https://pokeapi.co/api/v2/pokemon/" + id;
    return fetch(url).then(res => {return res.json()});
}

async function nombrar_pokemones() {
    for (let i = 1; i < 6; i++) {
        let pokemon = await obtener_pokemon(i);
        console.log(pokemon.name);
    }
}
nombrar_pokemones();
//Usando el async await podemos lograr esto, que la variable espere por su resultado antes de ejecutar el console.log()

async function nombrar_pokemones() {
    try {
        for (let i = 1; i < 6; i++) {
            const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + i).then(res => {return res.json()}); 
            console.log(pokemon.name);
        }
    } catch (error) {
        console.log(error);
    }
}
nombrar_pokemones();
