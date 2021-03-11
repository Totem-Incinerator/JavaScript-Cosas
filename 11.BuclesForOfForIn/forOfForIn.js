/*
	BUCLES FOR OF Y FOR IN
	Simplifica el bucle tradicional sin tener que darle 
	un número de vueltas ni realizar un incremento

	EJEMLPLO:

	//array
	let names = ['Paco', 'Jose', 'Paula', 'Maria'];

	//bucle for of
	for (name of names) {
		console.log(name);
	}

	FOR IN tiene la misma estructura y se usa para objetos,
	este devuelve el numero de indice mas no el valor.

	break: rompe el bucle
	continue: continua el bucle pero se salta la posición
	que le indiquemos.

*/

let names = ['Paco', 'Jose', 'Paula', 'Maria'];
for(let name of names){

	/*ejemplo: cuando este recorriendo y encuentre el valor que 
	le indiquemos, rompera el bucle ahí.
	*/
	if(name === 'Paula'){
		break;
	}
	console.log(name);
}

for(let index in names){

	/*
		EJEMPLO: 
		Indicamos que el bloque continue y que se salte esa
		posición.
	*/
	if(names[index] === 'Paula'){
		continue;
	}
	console.log(index);
} 