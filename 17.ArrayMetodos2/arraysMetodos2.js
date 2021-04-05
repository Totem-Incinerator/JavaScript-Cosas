/*  FROM
    Array.from(iterable) -> Convierte en array el elemento iterable

    let palabra = 'Hello my bro!';
    console.log(Array.from(palabra));
*/

/*  SORT
    .sort([callback]) -> Ordena los elementos de un array alfabeticamente
    (valor unicode), si le pasamos un callback los ordena en función del
    algoritmo que le pasemos.
    Ejemplo:
    console.log(numeros.sort((a,b) => a - b));

const letras = ['b', 'c', 'z', 'a'];
const numeros = [1,8,100,300,3];

console.log(letras.sort());//orenda basandose en el código UNICODE
console.log(numeros.sort());//por eso aquí no lo ordena de mayor a menor

//para odenar numeros le tenemos que pasar
console.log(numeros.sort((a,b) => a - b));
*/

/*  FOR EACH
    .forEach(callback(curentValue, [index])) -> Ejecuta la función indicada
    una vez por cada elemento del array.

    Ejemplo sin index:
    numbers.forEach((number) => console.log(number));

    Ejemplo con index:
    numbers.forEach((number, index) => console.log(`${number} esta en la posición ${index}`));

const numbers = [12,25,47,84,98];
numbers.forEach((number) => console.log(number));
numbers.forEach((number, index) => console.log(`${number} esta en la posición ${index}`));
*/


/*  SOME
    .some(callback) -> Comprueba si al menos un elemento del array cumple la condición

    Ejemplo:
    const words = ['HTML', 'CSS', 'JavaScript', 'PHP'];
    console.log(words.some(word => word.length > 9));
    Recorre cada uno de los elementos y comprueba que su longitud sea mayor (en este caso) a 9
    si esto se cumple regresa true y si no false.


const words = ['HTML', 'CSS', 'JavaScript', 'PHP'];
console.log(words.some(word => word.length > 9));
*/

/*  EVERY
    .every(callback) -> Comprueba si todos los elementos cumplen la misma condición
    Ejemplo:
    const words = ['HTML', 'CSS', 'JavaScript', 'PHP'];
    console.log(words.every(word => word.length > 9));
    En este caso el resultado sera false ya que la longitud de todos los elementos no es de 9


const words = ['HTML', 'CSS', 'JavaScript', 'PHP'];
console.log(words.every(word => word.length > 9));
*/


/*  MAP
    .map(callback) -> Transforma todos los elementos del array y devuelve un array
    Ejemplo:
    const vainas = ['zapatos', 'camisas', 'medias', 'sudaderas'];
    const nuevoMap = vainas.map(nuevoMap => nuevoMap);
    console.log(nuevoMap);
    Creo un array y luego guardo eso en nuevo map

    Ejemplo2:
    const numbers = [2,4,6,8,10];
    const numbers2 = numbers.map(number => number * 2);
    console.log(numbers2);
    Multiplico por 2 el primer array y lo guardo en numbers2




const vainas = ['zapatos', 'camisas', 'medias', 'sudaderas'];
const nuevoMap = vainas.map(nuevoMap => nuevoMap);
// console.log(nuevoMap);

const numbers = [2,4,6,8,10];
const numbers2 = numbers.map(number => number * 2);
console.log(numbers2);
*/

/*  FILTER
    .filter(callback) -> Filtra todos los elementos del
    array y que cumplan la condición y devuelve un nuevo array
    Ejemplo:
    const numbers = [2,4,6,8,10];
    const number2 = numbers.filter(number => number > 5);
    console.log(number2);
    Filtro para que solo me muestre los numeros mayores a 5, este
    nuevo array lo guardo en numbers2.




const numbers = [2,4,6,8,10];
const number2 = numbers.filter(number => number > 5);
console.log(number2);
*/


/*  REDUCE
    .reduce(callback) -> Reduce todos los elementos del array a un unico valor
    Ejemplo:
    const numbers = [2,4,6,8,10];
    console.log(numbers.reduce((a,b) => a+b));
    Sumo todos los numeros de un array

    EJemplo2:
        const users = [
        {
            name: 'user1',
            online: true
        },
        {
            name: 'user2',
            online: true
        },
        {
            name: 'user3',
            online: false
        },{
            name: 'user4',
            online: false
        }
    ]

    const usersOnline = users.reduce((contOnline, user) => {
        if(user.online) contOnline++;
        return contOnline
    },0)

    console.log(`Hay ${usersOnline} usuarios conectados`);
    Creo un arreglo de usuarios donde unos estan conectados (true) y 
    otros no (false), luego "reduzco" y guardo en una variable el resultado
    En el callback lo que hago es usar un contador de usuarios online (true)
    y utilizo un if para comprobar esto, luego le doy un valor inicial de cero
    para que la función entienda que el primer parametro que tiene es un valor
    numerico inicializado en cero.
    

const numbers = [2,4,6,8,10];
console.log(numbers.reduce((a,b) => a+b));

const users = [
    {
        name: 'user1',
        online: true
    },
    {
        name: 'user2',
        online: true
    },
    {
        name: 'user3',
        online: true
    },{
        name: 'user4',
        online: false
    }
]

const usersOnline = users.reduce((contOnline, user) => {
    if(user.online) contOnline++;
    return contOnline
},0)

console.log(`Hay ${usersOnline} usuarios conectados`);
*/



