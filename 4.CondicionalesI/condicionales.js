//CONDICIONAL SIMPLE
let num = 0;

let num1 = 0;
let num2 = 5;

if (num>0) console.log(`${num} es mayor que 0`);

//CONDICIONAL COMPUESTO
if (num>0) {
	console.log(`${num} es mayor que 0`);
} else {
	console.log(`${num} es menor que 0`);
}

//CONDICIONAL MULTIPLE
if (num>0) {
	console.log(`${num} es mayor que 0`);
} else if(num<0){
	console.log(`${num} es menor que 0`);
}else {
	console.log(`${num} es igual a 0`);
}

//OPERADORES LÓGICOS
/* 
	&& and
	|| O
*/

if (num1 > 0 || num2 > 0) {
	console.log(`${num1} o ${num2} son mayores que cero`);
}

//IF USANDO STRINGS
let word = 'Hola';

if (word.length > 4) {
	console.log(`${word} tiene mas de 4 letras, tiene `);
} else if(word.length < 4) {
	console.log(`${word} tiene menos de 4 letras`);
}else{
	console.log(`${word} tiene 4 letras`);
}

//IF CON BOOLEANOS
let respuesta = true;
if(respuesta == true) console.log('Respuesta tiene el valor true');
if(respuesta == false) console.log('Respuesta tiene el valor false');

//FORMA TIPICA DE ECONTRAR DONDE ! ES IGUAL A DIFERENTE Y LA VARAIBLE ES IGUAL A TRUE
if(respuesta) console.log('Respuesta tiene el valor true');
if(!respuesta) console.log('Respuesta tiene el valor false');

//declarar(); console.log(variable);

var billetes = [ [ 1 , 2 , 3 ] ,
              [ 4 , 5 , 6 ] ,
              [ 7 , 8 , 9 ] ];
console.log(billetes[1][2])

