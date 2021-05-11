//DOM - CREAR E INSERTAR ELEMENTOS

/*
- Crear un elemento: document.createElement(element)
- Escribir texto en un elemento: element.textContent = texto
- Escribir HTML en un elemento: element.innerHTML = código HTML

AÑADIR UN ELEMENTO AL DOM: parent.appendChild(element)
(para añadir un elemento se debe de tener en cuenta cual es el padre)

Fragmentos de código: document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

const title = document.getElementById('title');
const daysList = document.getElementById('daysList');
const selectDays = document.getElementById('daysSelect');

//creo el elemento de html LI
const itemList = document.createElement('LI');
//le añado un contenido
itemList.textContent = 'Lunes';
//lo agrego a la ul del html a través del método appendChild
daysList.appendChild(itemList);


//INSERTAR ETIQUETAS HTML DENTRO DE UN DOCUMENTO
title.innerHTML = 'DOM - <u>Crear e insertar</u> elementos I';


//guardamos el fragmento de código en una constante
const fragment = document.createDocumentFragment();
for(const day of days){//ciclo for para recorrer el array
	//a cada vuelta del ciclo creo un elemento LI
	const itemList = document.createElement('LI');
	//le agrego el contenido almacenado en la variable day
	itemList.textContent = day;
	//añadimos el elemento (dia) al fragmento de códgio
	fragment.appendChild(itemList);
}
//añado todo el fragmento de código a la UL
daysList.appendChild(fragment);

/*
//añadiendo a la lista de opciones (MI SOLUCIÓN)
const fragment2 = document.createDocumentFragment();
for(const d of days){
	const optionList = document.createElement('OPTION');
	optionList.textContent = d;
	fragment2.appendChild(optionList);
}
selectDays.appendChild(fragment2);
*/


//SOLUCIÓN DEL VÍDEO
const fragment3 = document.createDocumentFragment();
for(const day of days){
	const selectItem = document.createElement('OPTION');

	/*utilizó este método para que pueda manipular
	estos datos desde un lenguaje de backend
	*/
	selectItem.setAttribute('value', day.toLowerCase());
	selectItem.textContent = day;
	fragment3.appendChild(selectItem);
}
selectDays.appendChild(fragment3);
