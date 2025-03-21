
alert("Hola Mundo");

// Operador de asignación -> = -> Nos permite asignar un valor a una variable
let valorA = 5;
let valorB = 4;

valorA = 9;

// Operador de concatencaión -> Nos permite crear una cadena a aprtir de 2 o más expresiones, al menos una sea expresión
// Una expresión puede ser: una variable, un valor, una operación, una función, una cadena, etc.

// Operadores matemáticos	
console.log(valorA + " + " + valorB + " = " + (valorA + valorB)); // operador suma
console.log(valorA + " - " + valorB + " = " + (valorA - valorB)); // operador resta
console.log(valorA + " * " + valorB + " = " + (valorA * valorB)); // operador multiplicación
console.log(valorA + " / " + valorB + " = " + (valorA / valorB)); // operador división

// Operación módulo -> Nos permite obtener el residuo de una división, calcula el residuo de la división de dos números
console.log("5 % 1 = " + (5 % 1)); 
console.log("5 % 2 = " + (5 % 2)); 
console.log("5 % 3 = " + (5 % 3)); 
console.log("5 % 4 = " + (5 % 4)); 

// Operadores combinados (operador de asignación + operador matemático)
let variable1 = 10;
console.log(variable1); // Imprime 10
variable1 += 5; // esto es igual a escribir variable1 = variable1 + 5;
console.log(variable1); // Imprime 15
variable1 -= 7; // esto es igual a escribir variable1 = variable1 - 7;
console.log(variable1); // Imprime 8
variable1 *= 2; // esto es igual a escribir variable1 = variable1 * 2;
console.log(variable1); // Imprime 16

// Operador incremento
let variable2 = 0;
variable2++; // es como escribir variable2 + 1
console.log(variable2); 
variable2++;
console.log(variable2); 

// Operador decremento
let variable3 = 5;
variable3--; // es como escribir variable2 + 1
console.log(variable3); 
variable3--;
console.log(variable3); 

// Operadores de comparación
console.log("5 == 5 " + (5 == 5));
console.log("5 == '5' " + (5 == '5')); // El operador de igualdad (==) revisa unicamente el valor
console.log("5 === '5' " + (5 === '5')); // El operador de igualdad estricta (===) compara el valor y el tipo de dato

console.log("18 != 17 -> " + (18 != 17));
console.log("18 != '18' -> " + (18 != '18'));
console.log("18 !== '18' -> " + (18 !== '18'));

let variableMayor = 24;
let variableMenor = -1;
console.log(variableMayor + " > " + variableMenor + " -> " + (variableMayor > variableMenor));
console.log(variableMayor + " < " + variableMenor + " -> " + (variableMayor < variableMenor));

let variableIgual = 24;
console.log(variableMayor + " >= " + variableIgual + " -> " + (variableMayor >= variableIgual));
console.log(variableMayor + " <= " + variableIgual + " -> " + (variableMayor <= variableIgual));

// Operadores lógicos: permite convinar dos o más expresiones lógicas y obtener un resultado verdadero o falso
// AND -> &&
/* 
    true && true -> true
    true && false -> false
    false && true -> false
    false && false -> false
*/
let edad = 24;
let traeINE = true;
console.log("edad: " + edad);
console.log("traeINE: " + traeINE);
console.log("edad >= 18 && traeINE == true ->" + (edad >= 18 && traeINE));

traeINE = false;
console.log("edad >= 18 && traeINE == true ->" + (edad >= 18 && traeINE));

// OR -> ||
/*
    true || true -> true
    true || false -> true
    false || true -> true
    false || false -> false
*/
let especieMascota = 'perro';
console.log("especieMascota: " + especieMascota);
console.log("especieMascota == 'perro' || especieMascota == 'gato' -> " + (especieMascota == 'perro' || especieMascota == 'gato'));

especieMascota = 'gato';
console.log("especieMascota: " + especieMascota);
console.log("especieMascota == 'perro' || especieMascota == 'gato' -> " + (especieMascota == 'perro' || especieMascota == 'gato'));

especieMascota = 'conejo';
console.log("especieMascota: " + especieMascota);
console.log("especieMascota == 'perro' || especieMascota == 'gato' -> " + (especieMascota == 'perro' || especieMascota == 'gato'));

// NOT -> !
/*
    !true -> false
    !false -> true
*/
console.log("!true -> " + !true);
console.log("!false -> " + !false);

edad = 35;
console.log("!(edad >= 18) -> " + !(edad >= 18));

// Tarea investigar la O exclusiva (XOR) -> ^
/*
    true ^ true -> false
    true ^ false -> true
    false ^ true -> true
    false ^ false -> false
*/










