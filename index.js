console.log("hola mundo");
// comentarios en linea 
/*comentario
de 
varias
lineas*/


var primerVariables;
let edadUsuario;
// declarar variables
var nombreVariables;
// crear variables sin asignar valor
/*
inicializar varibles: 
asignar un valor al momento de crear la variables
*/
var gradoEstudiante="10A";
/*
Asignar un valor: 
igualar una variable existente a un nuevo valor
*/
edadUsuario=16;
//asignar un valor desde la variables 
console.log(edadUsuario);
var edad=17;
edadUsuario=edad;
console.log(edadUsuario);
/* Asignar valor desde el teclado :

existen 2 maneras de hacerlo la primera es por ventana emergente y la segunda es por medio de un formulario de html
*/
var valor=prompt("");
console.log("la variable vale "+ valor);
/*
constanes:
son valores que no pueden ser cambiados durante la ejecucion del codigo. las constantes siempre deben ser inicializadas 
*/
const PI= 3.1416;
// imprimir por consola
// simple
console.log("messi");
console.log(valor);
// concatenado
console.log( "messi "+ valor)
prompt("ingrese un valor: ");

// operadores
// suma
var suma; 
suma= 5+4 
console.log (suma);
var a = 12;
suma=a+8;
console.log (suma);
var b=20;
suma= a+b;
console.log (suma);
// resta
var resultado;
resultado=a-b;
console.log(resultado)
resultado= b-a ;
console.log (resultado);
// multiplicacion
var producto;
producto= a*b;
console.log (producto);
// division
var division;
division= a/b;
console.log (division);
division=b/a;
console.log (division);
// orden de operaciones
var resultado;
resultado = a*b;
console.log(resultado);
resultado=a*b-10;
console.log(resultado);
resultado=a*(b-10);
console.log (resultado)
// exponente/potencia
var exp= 3**2;
console.log(exp);
exp=3**3;
console.log(exp)
// cadenas o string
var cadenita1="3";
var cadenita2="5";
var sumacadenas=cadenita1 + cadenita2;
console.log (sumacadenas);
var nombre = "Samuel";
var apellido = "Gil";
var nombreCompleto = nombre+" "+ apellido;
console.log (nombreCompleto);
var longitud = nombre.length;
console.log(longitud);
console.log(nombreCompleto.length);
// encontrar caracteres dada la posicion del vector
var primeraLetra;
primeraLetra= nombre[0];
console.log(primeraLetra);
console.log(nombre[1]);
// encontrar la ultima posicion de una cadena o vector
console.log(nombre[nombre.length-1]);
// se debe buscar la longitud de la cadena y restar para encontrar la ultima letra 
// las posiciones de una cadena se pueden consultar pero no se pueden reasignar un valor
nombre[0]="P";
console.log(nombre);
nombre="Lionel";
console.log(nombre);