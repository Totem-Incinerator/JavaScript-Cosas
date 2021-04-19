const button = document.getElementById('button');
const input = document.getElementById('input')
const box = document.getElementById('box')

//añadiendo un evento a BUTTON
/*  SINTAXIS
    element.addEventListener('evento' callback);
*/



/*              EVENTOS DE RATON               */
/*  EVENTO DE CLICK
button.addEventListener('click', () => {
    console.log('click');
})

    EVENTO DE DOBLECLICK
button.addEventListener('dblclick', () => {
    console.log('doble click');
})

    MOUSE ENTER -> PASAR EL RATON POR ENCIMA DEL ELEMENTO
box.addEventListener('mouseenter', () => {
    box.classList.replace('red', 'green')
    console.log('has pasado por encima de la caja');
})

    MOUSELEAVE -> QUITAR EL MOUSE DE ENCIMA DEL ELEMENTO
box.addEventListener('mouseleave', () => {
    box.classList.replace('green', 'red')
})

    MOUSEDOWN -> CUANDO PULSAMOS EL BOTON IZQ DEL RATON
box.addEventListener('mousedown', () => {
    console.log('pos has bajado');
})

    MOUSEUP -> CUANDO SOLTAMOS EL BOTÓN IZQ DEL RATÓN
box.addEventListener('mouseup', () => {
    console.log('has levantado el dedo');
})

    MOUSEMOVE -> CUANDO MOVEMOS EN RATÓN DENTRO DEL ELEMENTO
box.addEventListener('mousemove', () => {
    console.log('estas moviendo el ratón');
})
*/




/*          EVENTOS DE TECLADO            */
/*  PRESIONAR UNA TECLA
input.addEventListener('keydown', () => {
    console.log('pos has pulsado una tecla');
})

    DEJAR DE PRESIONAR UNA TECLA
input.addEventListener('keyup', () =>{
    console.log('has dejado de pulsar una tecla');
})

    MANTENER UNA TECLA PULSADA
input.addEventListener('keypress', () => {
    console.log('mantienes una tecla presionada');
})
*/