class ProfileCard extends HTMLElement {
    static get observedAttributes(){
        return['name', "email"]
    }

    constructor(){
        super();
        this.attachShadow({ mode: 'open'})
    }

    attributeChangedCallback(prop, oldValue, newValue) {
        this[prop] = newValue;
        this.render()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `<link rel = "stylesheet" href="./components/ProfileCard/styles.css"> 
        <section>

            <p>
            <img src="https://cdn-icons-png.flaticon.com/512/16/16363.png" width="25" height="25">
            ${this.name}
            <br>
            <img src="https://us.123rf.com/450wm/rastudio/rastudio1203/rastudio120300099/12996705-caricatura-del-paisaje-natural.jpg?ver=6" width="550" height="400">
            <br> <contador-likes></contador-likes> 
            <br>
            Comments
            <br>
            ${this.email}
            
            </p>

            
           
            
            
        </section>
        `;
         
    }
}

customElements.define('profile-card', ProfileCard)