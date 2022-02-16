//tipos string
var nombre = "Waldo Panozo";

console.log(nombre);
console.log(typeof nombre);

/**
 * otro tipo de comentarios
*/

//tipo nuemrico - numeric
var numero = 345;
console.log(numero);
console.log(typeof numero);

//tipo objeto
var objecto = {
    nombre_nuevo:"Wal",
    apellido:"Panozo",
    whatsapp:"+59177499919",
}

console.log(objecto);
console.log(typeof objecto);

//tipos de datos booleanos

var b = true;

console.log(typeof b);

//tipo de dato funcion

function prueba(){

}

console.log(typeof prueba);

//tipod e dato simbolo

var simbolo = Symbol("Valor unico de una variable");


console.log(typeof simbolo);

///tipo de dato clase
class ClaseTipo{
    constructor(var1,var2){
        this.no = var1;
        this.ap = var2;
    }
}

console.log( typeof ClaseTipo);

///tipo de dato indefinido o undefined

var un;

console.log(un);
console.log(typeof un);

//tipo nulo

var n = null;

console.log(n);
console.log(typeof n);

