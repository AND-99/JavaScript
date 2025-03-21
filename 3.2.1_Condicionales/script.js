alert("Hola Mundo");

// Estrucutras de control if (Si .... entonces...)
/*
    La estructura de if nos permite tomar decisiones para ejecutar un pedazo de código.
    
    if(expresión lóigica){
    Código a ejecutar si la expresión lógica es verdadera
    }else{
         es opcional, compementa al if si el código a ejecutar si la expresión lógica es falsa
    }

    En caso de que expresión lógica sea verdad se ejecuta el código dentro del if
    En caso de que expresión lógica sea falsa no se ejecuta el código dentro del if

    El código dentro de unas llaves {} se les conoce como "bloque de código"

    
*/

let edad = 19;
let traeINE = true;
let peliculaDeseada = "Orgullo y Prejuicio"; //Spiderman, Wolverine, Guardianes de la Galaxia, cambiar el valor de la variable para probar

/* 
    Truco: cuando utilizamos booleanos no es necesario utilizar el operador de igualdad
*/

//ejemplo de "bloque de código"
if(edad >= 18 && traeINE){
    console.log("El usuario si puede entrar al cine");
    if(peliculaDeseada == "Spiderman"){
        console.log("El usuario va a ver la pelicula que quiere");
    }else if(peliculaDeseada == "Wolverine"){
        console.log("El usuario va a ver una pelicula que le gusta mucho");

    }else if(peliculaDeseada == "Guardianes de la Galaxia"){
        console.log("El usuario va a ver una pelicula que lo hacer reir");
    }else{
        console.log("El usuario ya no quiere ver nada");
    }
}



