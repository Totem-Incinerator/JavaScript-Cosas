/*
	OPERADOR TERNARIO
	(condicion) ? true : false

	(condicion) ?
		(primera sentencia,
		segunda sentencia)
		:
		(primera sentencia,
		segunda sentencia)

*/


let num = 17;
(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);

(num % 2 == 0) ? 
	(
		console.log(`${num} es par`), 
		console.log(`${num} es par 2`)
	) 
	:
	(
		console.log(`${num} es impar`),
		console.log(`${num} es impar 2`)
	)

