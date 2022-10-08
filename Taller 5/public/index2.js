import './components/index.js'
import data from './data.js';


class Heading extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        console.log(data.length);
    }
    connectedCallback() {
        this.render();
}   

    render (){
        const compts = data.map(({name, email, username}) => `<profile-card name=${name} email=${email} username=${username}></profile-card>`) 
        console.log(compts);
        this.shadowRoot.innerHTML = compts.join("")
    }
} 

customElements.define('Heading-insta', Heading)

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
        const compts = `<head-insta></head-insta>`
        console.log(compts);
        this.shadowRoot.innerHTML = `<head-insta></head-insta>`
    }
} 

customElements.define('head-i', head)