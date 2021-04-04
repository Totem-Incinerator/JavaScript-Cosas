//creación de un objeto
const person ={
    name: 'Julio',
    age: 23,
    sons: ['Paco', 'Benito', 'Alfonso']
}

//MOSTRAR UNA PROPIEDAD EN ABSOLUTO
// console.log(person);
// console.log(person.name);
//  console.log(person['name]);
// console.log(person.age);
// console.log(person.sons);


/*MOSTRAR VALORES CON EL CICLO FOR IN
for(const key in person){
    console.log(person[key]);
}
*/

/*
    MOSTRAR EL ARRAY QUE ESTA DENTRO DEL OBJETO PERSON
    USANDO FOR OF
*/
for(const son of person.sons){
    console.log('Hijos');
    console.log(son);
}

console.log('\n');

//MOSTRAR TODO EL OBJETO
console.log(`Hola ${person.name}. Tienes ${person.age} y tus hijos se llaman: ${person.sons.join(', ')}`);


