/*  GET ELEMENT BY ID
    element | document.getElementById('id) -> Acceder a un elemento a través de su id


//los elementos siempre se guardan en una constante
const title = document.getElementById('title')
// console.dir(title);

//permite leer y editar
title.textContent = 'DOM - Accediendo a nodos :D';
*/

/*  QUERY SELECTOR
    element | document.querySelector('selectorCSS) -> Accede al primer elmento que coincida
    con el selector CSS


se debe de referenciar el selector tal como se escribe en CSS, es decir, con un punto antes del nombre de la clase
const paragraph = document.querySelector('.paragraph:nth-child(3)')//no se puede accedera pseudoelementos desde JS
console.log(paragraph)

const paragraph = document.querySelector('.paragraph')
const span = document.getElementById('title').querySelector('span');//para acceder a cada elmento se debe de seguir la estructura de escalera
console.log(span.textContent)

paragraph.textContent = 'EY! Me has editado!'

const paragraph2 = document.querySelector('.paragraph:nth-child(2)')
paragraph2.textContent = 'ESTOY EDITADO X2 xD'
*/

/*  QUERY SELECTOR ALL
    document | element .querySelectorAll('selectorCSS) -> Accede a todos los elementos
    que coincidadn con el selector CSS, devuelve un nodeList
    LOS NODELIST NO SON ARRAYS
*/

const paragraphs = document.querySelectorAll('.paragraph');
//insertar estilo desde js (no recomendado)
paragraphs[0].style.color = 'lime';
console.log(paragraphs);

//convertir un NODELIST  a ARRAY USANDO SPREAD
const paragraphSpread = [...document.querySelectorAll('.paragraph')]
paragraphSpread.map(p => p.style.color = 'red');


//convertir un NODELIST a ARRAY USANDO Array.from
const paragraphArray = Array.from(document.querySelectorAll('.paragraph'));
paragraphArray.map(p => p.style.color = 'blue' );