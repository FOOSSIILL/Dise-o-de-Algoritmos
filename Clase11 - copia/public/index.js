import './components/index.js'
import data from './data.js';


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
        const compts = data.map(({name, email}) => `<profile-card name=${name} email=${email}></profile-card>`) 
        console.log(compts);
        this.shadowRoot.innerHTML = compts.join("")
    }
} 

customElements.define('app-container', Appcontainer)