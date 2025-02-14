import fs from 'fs'; //Proporciona una API para interactuar con el sistema de archivos, usando módulos de Node.js

//Clase para representar un Superhéroe
class Superheroe{
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo){
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }
}

//Función para leer y ordenar los superheroes
export function leerSuperheroes(ruta){ //se crea una función "leerSuperheroes" y pasamos dirección de donde se leerán dichos superheroes
    const datos = fs.readFileSync(ruta, 'utf-8'); //Con readFileSync indicamos que se realice la lectura del archivo en la ruta indicada y que el código no siga su ejecución hasta terminar de leer dichos datos
    const superheroesArray = JSON.parse(datos); //Analiza una cadena de texto como JSON (datos) y la transforma en un objeto de JavaScript (superheroesArray)

    //Convertir a instancias de Superheroe
    const superheroes = superheroesArray.map(
        hero => new Superheroe (hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    ); //Explicado en el archivo del "aclaraciones" del repositorio (1*)

    //Ordenar por nombre de superhéroe
    superheroes.sort((a,b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe)); //Explicado en el archivo del "aclaraciones" del repositorio (2*)
    return superheroes; //Retorna el array superheroes
}