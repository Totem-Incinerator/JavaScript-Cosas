/*  ATRIBUTOS
    Permite traer el tipo de atributo del elemento
    element.getAttribute('atributo');

const name = document.getElementById('name')
const title = document.getElementById('title');
console.log(name.getAttribute('type'));//obtengo el atributo

    setAttribute
    Permite modificar el atributo
    element.setAttribute('atributo', 'valor')

name.setAttribute('type', 'range')//modifico el atributo
console.log(name.getAttribute('type'));
*/

const name = document.getElementById('name')
const title = document.getElementById('title');

/*  CLASES -> AÑADIR CLASES
    Permite añadir la cantidad de clases que queramos
    element.classList.add('clase', 'clase', 'clase'...)
*/
title.classList.add('nueva', 'clase');


/*  CLASES -> REMOVER UNA CLASE
    Permite quitar las clases que queramos
    element.classList.remove('clase');
*/
title.classList.remove('nueva', 'clase')
console.log(title);


/*  CLASES -> COMPROBAR SI UNA CLASE EXISTE
    Devuelve un BOOLEANO
    element.classList.contains('clase');
*/
if (title.classList.contains('title')) {
    console.log('contiene la clase title');
} else {
    console.log('NO contiene la clase title');
}


/*  CLASES -> REMPLAZAR UNA CLASE
    element.classList('oldCass', 'newClass');
*/
title.classList.replace('title', 'main-title');
console.log(title);



/*  ATRIBUTOS "DIRECTOS"
    Permiten acceder a esos atributos directamente
    id
    value
*/
console.log(name.value.length);