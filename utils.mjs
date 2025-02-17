import fs from 'fs'; //Proporciona una API para interactuar con el sistema de archivos, usando módulos de Node.js
import { json } from 'stream/consumers';

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

//Función para leer y ordenar los superhéroes
export function leerSuperheroes(ruta){ //Se crea una función "leerSuperheroes" y obtenemos como parámetro la dirección de donde se leerán dichos superhéroes

    const datos = fs.readFileSync(ruta, 'utf-8'); //Con readFileSync indicamos que se realice la lectura del archivo en la ruta indicada y que el código no siga su ejecución hasta terminar de leer dichos datos
    
    const superheroesArray = JSON.parse(datos); //Analiza una cadena de texto como JSON (datos) y la transforma en un objeto de JavaScript (superheroesArray)

    //Convertir a instancias de Superhéroe
    const superheroes = superheroesArray.map(
        hero => new Superheroe (hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    ); //Explicado en el archivo "aclaraciones" del repositorio (1*)

    //Ordenar por nombre de superhéroe
    superheroes.sort((a,b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe)); //Explicado en el archivo "aclaraciones" del repositorio (2*)

    return superheroes; //Retorna el array superhéroes
}

//Nueva función para agregar superhéroes
export function agregarSuperheroes(rutaOriginal, rutaNueva) {

    //Realizamos la lectura de los archivos necesarios
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf-8'); 
    const datosNuevos = fs.readFileSync(rutaNueva, 'utf-8');

    //Convertimos los archivos leídos a objetos JS
    const superheroesOriginales = JSON.parse(datosOriginales);
    const nuevosSuperheroes = JSON.parse(datosNuevos);

    //Convertir los nuevos superhéroes a instancias de Superhéroe
    const instanciasNuevos = nuevosSuperheroes.map(
        hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );

    //Combinar listas (utilizando Spread operator)
    const listaActualizada = [...superheroesOriginales, ...instanciasNuevos];

    //Guardar lista actualizada
    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2), 'utf-8'); //Explicado en el archivo "aclaraciones" del repositorio (3*)

    console.log('Lista de superhéroes actualizada con éxito.');

}