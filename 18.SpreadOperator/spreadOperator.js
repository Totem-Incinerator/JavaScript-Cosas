// OPERADOR DE EXPANSIÓN -> PERMITE OBTENER EL CONTENIDO DE UN ARRAY

//ENVIAR ELEMENTOS DE UN ARRAY A UNA FUNCIÓN
/*
const addNumbers = (a,b,c) => {
    console.log(a+b+c);
}

const numbersToAdd = [1,2,3]

addNumbers(...numbersToAdd);//usamos los 3 puntos para enviar solo los valores
*/


//AÑADIR UN ARRAY A OTRO ARRAY
/*
let users = ['marta', 'jaime', 'laura'];
let newUsers = ['javier', 'david', 'rosa', 'juan', 'mercedes']

console.log(users);
users.push(...newUsers);
console.log(users);
*/

//COPIAR UN ARRAY
/*
let arr1 = [1,2,3];
let arr2 = [...arr1];
console.log(arr2);
*/


//CONCATENAR ARRAYS
/*
let arr1 = [1,2,3];
let arr2 = [4,5,6];

// let arrConcat = arr1.concat(arr2);//con metodo concat
let arrConcat = [...arr1, ...arr2];
console.log(arrConcat);
*/


//ENVIAR UN NÚMMERO INDEFINIDO DE ARGUMENTOS A UNA FUNCIÓN
//PARAMETROS REST
/*
const restParams = (...numbers) => {
    console.log(numbers);
}
restParams(1,2,3,4,5,6,7,8,9,0,5,4,3,3,64,5786)
*/

//TRABAJAR CON LA LIBRERIA MATH
/*
const numbers = [14,56,78,23,45];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
*/

//ELIMINAR ELEMENTOS DUPLICADOS
const numbers = [14,56,78,23,45,45];
console.log(new Set(numbers));//elmentos duplicados
console.log([...new Set(numbers)]);//array de elementos sin repetir
