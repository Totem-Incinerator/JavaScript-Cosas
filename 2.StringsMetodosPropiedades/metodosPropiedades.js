//Strings

let cadena = "Hola Mundo";

/*
	PROPIEDADES
	Length -> devuelve longitud de la cadena
*/

console.log(cadena.length);


//toUppercase() -> devuelve la cadena en mayusculas
console.log(cadena.toUpperCase());

//toLowerCase() -> devuelve en minusculas
console.log(cadena.toLowerCase());


/*
	indexOf(string) -> Devuelve la posición en la que se encuentra el string
	si no lo encuentra devuelve -1
*/
console.log(cadena.indexOf('Hola'));


/*
	replace(valor a buscar, valor nuevo) -> remplaza el fragmento de la 
	cadena que le digamos y pone el nuevo valor
*/
console.log(cadena.replace('bro', 'YouTube'));


/*
	substring(inicio [,fin]) -> Extrae los caracteres desde incio
	hasta el fin (el final no se incluye)
*/
console.log(cadena.substring(3));



/*
	slice(inicio [,fin]) -> Igual que substring pero admite valores negativos
	si ponemos valores negativos comenzará desde atrás

	Si no se incluye el final extrae hasta el final.
	(2,-4) -> Empieza a contar en el tercer caracter y los 4 ultimos no los 
	considera.
*/
console.log(cadena.slice(2,-4));


/*
	trim() -> Elimina los espacios a l inicio y al final de la cadena
*/
let cadena2 = '      Hola youtube, estamos trabajando con cadenas          ';
console.log(cadena2.trim());


/*
	startsWith(valor [,inicio]) -> Sirve para saber si la cadena empeiza con ese valor
	Devuelve true o false
*/
console.log(cadena.startsWith('H'));
console.log(cadena.startsWith('M',5));

/*
	endsWith(valor [,longitud]) -> Sirve para saber si la cadena termina
	con ese valor. Devuelve true o false.
*/
console.log(cadena.endsWith('o'));

//preguntamos que si termina en a pero solo teniendo en cuenta los primeros 4
//caracteres
console.log(cadena.endsWith('a',4));

//preguntamos que si entre los 8 primeros caracteres, el ultimo es una n
console.log(cadena.endsWith('n',8));

//preguntamos si la frase termina en Mundo
console.log(cadena.endsWith('Mundo'));

/*
	Includes(valor[,inicio]) -> Igual que indexOf pero devuelve true
	o false
*/
console.log(cadena.includes('n'));

//con el parametro opcional le indicamos desde donde empieza a contar
console.log(cadena.includes('a',5));

/*
	repeat(valor) -> Repite el string el número de veces que le indiquemos
*/
let cadena3 = 'Hola';
//se puede usar cualquier valor seguido de .repeat(valor);
console.log(cadena3.repeat(3));

//TEMPLATE STRINGS
/*
	Permite escribir de manera mas facil las concatenaciones
	se usa el doble acento
*/
let nombre = 'Juan';
let apellido = 'Gomez';
let edad = 20;

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años`);

console.log(`Hola ${nombre} ${apellido}. El año que viene tendrás ${edad + 1} años`);
