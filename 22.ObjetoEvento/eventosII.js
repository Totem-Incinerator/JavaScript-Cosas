const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');

const link = document.getElementById('link');
const galeria = document.getElementById('galeria');
const gItem = document.getElementById('gItem');

/* input.addEventListener('keyup', (e) => {
    console.log(e.key);
}) */


/* 
button.addEventListener('mouseenter', (e) => {
    cambiarTitulo('hola', 'ey');
}) */

/* button.addEventListener('mouseleave', () => {
    button.textContent = 'Click Me';
}) */


cambiarTitulo('eyyyyyyyyyyyyyyyyyyyy');

function cambiarTitulo(text){

    button.addEventListener('mouseenter', () => {
        button.textContent = text;
    })

    button.addEventListener('mouseleave', () => {
        button.textContent = 'Click Me';
    });
}


//prevenir que un elemento haga su función por defecto
//la función preventDefault no permite que se ejecute la función por defecto de los elementos
link.addEventListener('click', (e) => {
	e.preventDefault();
})

/*PARA FORZAR UN EVENTO
añadimos un event listenner como normalmente se hace
y despues llamamos al "tipo de evento" un función
*/
link.addEventListener('click', (e) =>{
	console.log('ha hecho click');
})
link.click();



/*añadir clase RED a un elemento en el que
se ha hecho click.
*/
galeria.addEventListener('click', (e) => {
	console.log(e.target.textContent);
	e.target.classList.add('red');
})



