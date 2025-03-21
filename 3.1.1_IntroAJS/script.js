console.log("¡Hola mundo!");

// Variables: Espacio dentro de la computadora que permite guardar datos 
/* Receta mágica: let (especificador de la variable) + nombre de la variable = + valor que queremos guardar
let nombre = "Juan";
*/

/* Especificadores de variables en JavaScript (Var, let, const):
- let: permite reasignar el valor de la variable (palabra reservada)
- const: no permite reasignar el valor de la variable
- var: permite reasignar el valor de la variable (no se recomienda su uso)
*/

// String (cadenas): Nos permite representar texto 
// Para crearlas podemos utilizar comillas simples,  dobles o backticks

let nombre = "Malinali"; //Declarar una varibale llamada nombre y le asigno el valor de "Malinali"
console.log(nombre); //Imprimir en consola el valor de la variable nombre

nombre = "Daniel"; //Reasignar el valor de la variable nombre
console.log(nombre); 

// Number (números): Nos permite representar números
// A difererencia de las cadenas este tipo de dato NO requiere de ninún tipo de comillas
let edad = 25; //Enteros, declarar una variable llamada edad y le asigno el valor de 25
let altura = 1.7; //Declarar una variable llamada altura y le asigno el valor de 1.7
let gradosCentigrados = -90; //Negativos, declarar una variable llamada grados y le asigno el valor de -90
let precio = 99.99; //Decimales, declarar una variable llamada precio y le asigno el valor de 99.99

console.log(edad);
console.log(altura);
console.log(gradosCentigrados);
console.log(precio);

// Concatenación: Unir dos o más cadenas de texto
let mensajeFinal = nombre + " tiene " + edad + " años.";
console.log(mensajeFinal);

// const = constante (no se puede reasignar el valor de la variable)
const GRAVEDAD = 9.81;
const PI = 3.1416;

//Boolean (booleanos): Nos permite representar valores de verdadero o falso
let esMayorDeEdad = true; //Declarar una variable llamada esMayorDeEdad y le asigno el valor de true
let esMenorDeEdad = false; //Declarar una variable llamada esMenorDeEdad y le asigno el valor de false

// Plabra reservada: Palabra especial en el lenguaje de programación que no puede usarse como nombre de variables, funciones, clases.

alert(mensajeFinal) //Ventana emergente que muestra un mensaje
let nombreMascota = prompt("Escribe el nombre de tu mascota"); //Ventana emergente que solicita un dato al usuario
// prompt SIEMPRE convierte el valor en una cadena de texto
alert("El nombre de la mascota es: " + nombreMascota);

// Tarea: Leer los datos de una mascota e imprimir un mensaje que incluya todos los datos leídos
// utilizar al menos 1 vez cada tipo de dato (string, number, boolean)
//Ejercicio1 - Mascotas:
let inicio = prompt("¿Tienes una mascota?");
let nombreMascota = prompt("Escribe el nombre de tu mascota");
let tipoMascota = prompt("Escribe el tipo de mascota");
let razaMascota = prompt("Escribe la raza de tu mascota");
const edadMascota = prompt("Escribe la edad de tu mascota");
alert("Tienes una mascota llamada " + nombreMascota + " es un " + tipoMascota + " de raza " + razaMascota + " y tiene " + edadMascota + " años.");

//Ejercicio 2:
// Crear un cuestionario de 10 preguntas, mostrar cada pregunta una por una y al final mostrar la respectiva pregunta con la respuesta ingresada por el usuario.
Que al menos dos preguntas sean de opción multiple.
Que al menos dos preguntas sean valores numericos.
Cada pregunta debe tener la respuesta en los comentarios del código
Agregar cada respuesta correcta a una variable   

