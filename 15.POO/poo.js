class Persona{

    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

        this.datos = `Me llamo ${nombre} ${apellido} y tengo ${edad} años!`;
    }

    saludar(){
        return `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años!`;
    }
}

const juan = new Persona('Juan', 'Perez', 23);
const marta = new Persona('Marta', 'Perez', 34);

console.log(juan.saludar());
console.log(marta.saludar());

