//OBJETOS
/*
	Math es un objeto estatico, es decir que tenemos que usar su nombre
	para utilizarlo.

PROPIEDADES
	Math.E -> Constante de Eurles
	Math.Pi -> Constante de PI

METODOS
	Math.abs(x) -> Devuelve el valor absoluto
	Math.ceil(x) -> Devuelve el entero mas grande mayor o igual que un número 
	(redondea hacia arriba)

	Math.floor(x) -> Devuelve el entero más pequeño menor o igual que un número
	(redondea hacia abajo)

	Math.pow(x,y) -> Devuelve la potencia de x elevado a y
	Math.random() -> Genera un número pseudoaleatorio entre o y 1.
	Math.round(x) -> Devuelve el valor de un número redondeado
	Math.sign(x) -> Devuelve el signo de la x, que indica si x es positivo, negativo
	o cero.
	Math.sqrt(x) -> Devuelve la raiz cuadrada de x

*/

console.log(Math.E);
console.log(Math.PI);

let num = 5.9;

console.log(Math.abs(num));

console.log(Math.ceil(num));

console.log(Math.floor(num));

console.log(Math.pow(2,3));

console.log(Math.random() * 100);

//generar numero aleatorio entre 0 y 100 sin decimales
console.log(Math.round(Math.random() * 100));

//generar numero aleatorio entre 2 valores
//console.log(Math.random() * (max - min) + min); el numero minimo nunca saldrá
console.log(Math.round(Math.random() * (10 - 5) + 5));

console.log(Math.sign(5)); // -1 | 0 |1

console.log(Math.sqrt(2));