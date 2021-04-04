class Libro{

    constructor(titulo, autor, anio, genero){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.genero = genero;
    }

    getAutor(){
        return this.autor;
    }

    getGenero(){
        return this.genero;
    }

    infoLibro(){
        return `Titulo: ${this.titulo}\n
                Autor: ${this.autor}\n
                Año: ${this.anio}\n
                Genero: ${this.genero}`
    }
}

let books = [];

while(books.length < 3){
    let titulo = prompt('Introduce el titulo');
    let autor = prompt('Introduce el autor');
    let anio = prompt('Introduce el año');
    let genero = prompt('Introduce el genero').toLocaleLowerCase();

    if(titulo != '' && 
        autor != '' && 
        !isNaN(anio) && 
        anio.length == 4 && 
        (genero == 'aventura' || genero == 'terror' || genero == 'fantasia')){
        books.push(new Libro(titulo, autor, anio, genero));
    }
}

const mostrarLibros = () => {
    return console.log(books);
}

const mostrarAutores = () => {
    //creo un array para guardar los autores
    let autores = [];

    //Recorro el array y agrego los autores al array
    for(const book of books){
        autores.push(book.getAutor());
    }

    //el metodo sort() lo ordena alfabeticamente
    console.log(autores.sort());
}

const mostrarGenero = () =>{
    const genero = prompt('Intoduca el género a buscar');

    for(const book of books){
        if(book.getGenero() == genero){
            console.log(book.infoLibro());
        }
    }

}

// mostrarLibros();
//mostrarAutores();
mostrarGenero();
