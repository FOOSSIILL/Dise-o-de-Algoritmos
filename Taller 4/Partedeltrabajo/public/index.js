import './components/index.js'
import data from './data.js';

const numbers = new Array(); 
console.log("new numbers is : " + numbers );  



async function nombrar_pokemones() {
    try {
        for (let i = 1; i < 6; i++) {
            const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + i).then(res => {return res.json()}); 
  
            console.log(pokemon.name);
            console.log(pokemon.abilities); 
            console.log(pokemon.forms);

            length = numbers.push(pokemon.name); 
console.log("new numbers is : " + numbers );


        }
    } catch (error) {
        console.log(error);
    }
}
nombrar_pokemones();


//Elemento que muestra todos los posts
class Appcontainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        console.log(data.length);
    }
    connectedCallback() {
        this.render();
}   

    render (){
        const compt = data.map(({name, email, username}) => `<profile-card name=${name} email=${email} username=${username}></profile-card>`) 
        console.log(compt);
        this.shadowRoot.innerHTML = compt.join("")

        
    }
} 

customElements.define('app-container', Appcontainer)

//Elemento que muestra la parte de arriba

class head extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        console.log(data.length);
    }
    connectedCallback() {
        this.render();
}   

render (){
    for (let i = 1; i < 6; i++) {
    const compts = numbers[i]  => `<profile-card name=${name} email=${email} username=${username}></profile-card>`) 
    console.log(compts);
    this.shadowRoot.innerHTML = compts.join("")
    }

}
} 

customElements.define('head-i', head)

//Parte superior
class Barra extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        console.log(data.length);
    }
    connectedCallback() {
        this.render();
}   

    render (){
        this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="estilos.css">

<link rel="preconnect" href="https://fonts.googleapis.com/%22%3E">

<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin> 

<link href="https://fonts.googleapis.com/css27family-Roboto:wght@1068display-swap" rel="stylesheet">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" Integrity="sha384-52XxXh379/gr.OY+zLeJdY/apuqC4A9rGustPontopuMTPEn2k" crossorigin="anonymous">

        
        <nav class="navbar">

        <div class="nav__contenedor">
            <img src="https://www.jurererural.com/images/instagram.png" class="logo" alt="logo" height ="300" width="500"  > 
 
            <input type="text" class="nav__buscar"  placeholder="Buscar">
           
           <div class="nav__items"> 
            <button> <img  src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="" height ="25" width="25" 10px 24px> </button>
            <button> <img src="https://www.asgthestore.co.za/wp-content/uploads/2020/02/facebookmessengericon-1320186683283341836.png" alt="" height ="25" width="25" 10px 24px> </button>
            <button> <img  src="https://static.thenounproject.com/png/809337-200.png" alt="" height ="25" width="25" 10px 24px> </button>
            <button> <img src="https://cdn2.iconfinder.com/data/icons/instagram-outline/19/18-512.png" alt="" height ="25" width="25" 10px 24px> </button>
            <button> <img src="https://cdn-icons-png.flaticon.com/512/2716/2716443.png" alt="" height ="25" width="25" 10px 24px> </button>
            
        
         </div>
        </div>
    </nav>
        `;

    }
} 

customElements.define('barra-i', Barra)


