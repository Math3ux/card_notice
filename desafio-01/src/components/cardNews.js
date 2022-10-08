class Cardnews extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())

    }

    build() {
        const componentRoot = document.createElement('div')
        componentRoot.setAttribute('class', 'card')

        const cardLeft = document.createElement('div')
        cardLeft.setAttribute('class', 'card_left')

        const autor = document.createElement('span')
        autor.textContent = `By ${this.getAttribute('autor') || 'Anonymous'}`
        cardLeft.appendChild(autor)


        const titulo = document.createElement('h1')
        titulo.textContent = this.getAttribute('titulo')
        cardLeft.appendChild(titulo)


        const content = document.createElement('p')
        content.textContent = this.getAttribute('conteudo')
        cardLeft.appendChild(content)



        const cardRight = document.createElement('div')
        cardRight.setAttribute('class', 'card_right')

        const newsImage = document.createElement('img')
        newsImage.src = this.getAttribute('photo')
        cardRight.appendChild(newsImage)

        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)

        return componentRoot
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = `
        
    .card {
        margin: 20%;
        width: 720px;
        box-shadow: 11px 10px 24px -6px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 11px 10px 24px -6px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 11px 10px 24px -6px rgba(0, 0, 0, 0.75);
        display: flex;
        flex-direction: row;
    }
    
    .card_left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
    }
    
    .card_left>h1 {
        margin-top: 15px;
        font-size: 25px;
        cursor: pointer;
    }
    
    .card_left>p {
        color: gray;
    }
    
    .card_left>span {
        font-weight: 400;
    }
    
    .card_right>img {
        margin-left: 4px;
        width: 200px;
        height: 100%;
    }
        `;
        return style
    }
}

customElements.define('card-news', Cardnews)