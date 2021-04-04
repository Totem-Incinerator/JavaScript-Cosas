//creación de función ANTES
/*
function saludar() {
    console.log('Ey! <3');
}
*/

//sintaxis actual de una función
const saludar = () => console.log('Ey! <3');

//función con parametro
const saludarUsuario = (user) => console.log(`Hola ${user}`)

//invocación
saludar();
saludarUsuario('Pato');

//funciones en una sola linea
//se usan cuando solo necesitamos ejecutar UNA linea de código
const suma = (num1, num2) => num1 + num2
console.log(suma(3,5));

//se debe de poner el return cuando se usan llaves
const resta = (num1, num2) =>{
    return num1 - num2;
}

//se puede guardar el return en una variable
let resultado = resta(4,2);

console.log(`La resta es: ${resultado}`);

