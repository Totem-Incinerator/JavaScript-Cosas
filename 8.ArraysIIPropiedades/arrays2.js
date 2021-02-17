let numbers = [1,2,3,4,5,1];

/*
	Arrays - Propiedad
	.length - devuelve el número de posiciones que contiene el array
*/
console.log(numbers.length);


/*
	Arrays - Métodos
	Array.isArray(varaible a evaluar) - Devuelve true si la variable es un array
*/
console.log(Array.isArray(numbers));

/*
	ELIMINAR UN ELEMENTO
		.shift() - Elimina el primer elemento del array y devuelve ese elemento
		.pop() - Elimina el último elemento de un array y devuelve ese elemento

*/
//console.log(numbers);
//numbers.shift();
//console.log(numbers);
//numbers.pop();
//console.log(numbers);

//GUARDAR ELEMENTO ELIMINADO EN UNA VAIRABLE
//let deleteElement = numbers.shift();

/*
	AÑADIR ELEMENTOS
		.push(element1, element2..) - Añade uno o mas elementos al final del array y devuelve 
		la nueva longitud.
		.unshift(element1, element2..) - Añade uno más elementos al comienzo del array y devuelve
		la nueva longitud.
*/

//guardar nuevo elemento que añado al array
/*
let nuevoElemeto = numbers.push(6); //al principio
console.log(numbers);
console.log(nuevoElemeto);

let nuevoElemento2 = numbers.unshift(0);
console.log(numbers);
*/

/*
	.indexOf() - Devuelve el primer índice del elemento que coincida con 
	 el valor especificado, o -1 si ninguno es encontrdo.

*/
//console.log(numbers);
//console.log(numbers.indexOf(6));

/*
	.lastIndexOf() - Devuelve el último índice del elemento que coincida
	con el valor especificado, o -1 si ninguno es encontrado,

*/
//console.log(numbers);
//console.log(numbers.lastIndexOf(1));

/*
	.reverse() - Invierte el orden de los elementos del array.
*/
//console.log(numbers);
//numbers.reverse();
//console.log(numbers);

/*
	.join('separador') - Devuelve un string con el separador que
	indiquemos, por defecto son comas.
*/
//console.log(numbers);
//console.log(numbers.join(' '));

/*
	.splice(a,b,items) - Cambia el contendio de un array elminando elementos
	existentes y/o agregando nuevos elementos.
		a - Indice de inicio
		b- Número de elementos (opcional)
		Items - Elementos a añadir en el caso de que se añadan. (opcional)
*/

console.log(numbers);
//numbers.splice(3); - Elimina desde la posición a hasta al final
//numbers.splice(2,2); - Elimina desde la poción a el número de valores que le indiquemos
/*numbers.splice(2,2,10,23,54); - Si b es un valor distinto de 0 elimina el número de valores que 
								indiquemos en b y añade los valores de items a partir de la posición a.
*/
//numbers.splice(3,0,10,23,54); - Si b vale 0 añade los elementos a partir de la 
//posición a y no elimina ninguno.
//console.log(numbers);


/*
	.slice(a,b) - Extrae elementos de un array desde el índice A hasta el índice
	B. Si no existe B lo hace desde A hasta el final, si no existe ni A ni B 
	hace una copia del original.
*/

//CREA UNA COPIA DEL ARRAY ORIGINAL
//let newNumbers = numbers.slice();

//SACA UN NUEVO ARRAY PERO CUENTA DESDE LA POSICÓN 2
/*
let newNumbers = numbers.slice(2);
console.log(numbers);
console.log(newNumbers);
*/

//SI LE PASAMOS 2 VALORES, EMPIEZA DESDE LA POSICIÓN A Y TERMINA EN LA POSICIÓN B
//LA posición b determina donde va a terminar de contar.
//let newNumbers = numbers.slice(2,6);
//console.log(numbers);
//console.log(newNumbers);



