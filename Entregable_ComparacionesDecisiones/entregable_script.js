alert("Hola Mundo");

//Entregable clase de hoy:
/*
    Si la nota es 90 o más, el estudiante aprueba con "Excelente".
    Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
    Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
    Si la nota es menor de 60, el estudiante no aprueba.
*/

const estudiante = true;
let calificacion = 78;

if(estudiante){
    if(calificacion >= 90){
        console.log("Excelente");
    }else if(calificacion >= 75 && calificacion <= 89){
        console.log("Bien");
    }else if(calificacion >= 60 && calificacion <= 74){
        console.log("Suficiente");
    }else if(calificacion < 60){
        console.log("El estudiante no aprueba");}
}
