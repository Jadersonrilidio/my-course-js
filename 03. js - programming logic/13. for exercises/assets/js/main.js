/*
 <div>
    <p id="frase1">Frase 1</p>
    <div id="frase2">Frase 2</div>
    <footer id="frase3">Frase 3</footer>
    <section id="frase4">Frase 4</section>
</div>
*/

const elementos = [
    {tag: 'p', texto: 'Meu texto'},
    {tag: 'div', texto: 'vai ser bom'},
    {tag: 'footer', texto: 'pra fazer'},
    {tag: 'section', texto: 'um teste'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let myTags = document.createElement(tag);
    let myText = document.createTextNode(texto);
    myTags.appendChild(myText);
    // myTags.innerText = texto; // ou inner.HTML
    div.appendChild(myTags);
}

container.appendChild(div);