console.log("punto 1")
var numero1 = parseInt(prompt("ingrese un numero"));
var numero2 = prompt("ingrese otro numero");
for(var i=numero1; i<numero2; i++){
    console.log(i)
}
console.log("punto 2 y 3")
var multiplicacion = parseInt(prompt("ingrese un numero"));
for(var i = 0; i<=10; i++){
    console.log(multiplicacion+"x"+i+"="+multiplicacion* i );

}
var limite= parseInt(prompt("ingrese el tope que usted desee"));
var multiplicacion=parseInt(prompt("ingrese un numero"));
for(var i=0; i<=limite; i++){
    console.log(multiplicacion+ "x"+i+"="+multiplicacion* i );
}
console.log(multiplicacion)

console.log("punto 4")

var arregloDeNum=[]
for(var i=0; i<10; i++){
    var numeri=parseInt(prompt("ingrese un numero"));
    arregloDeNum.push(numeri);
}
var mayor=arregloDeNum[0]
for(var i=0; i <arregloDeNum.length; i++){
    if(arregloDeNum[i]>mayor){
        mayor=arregloDeNum[i]
    }
}
console.log("el numero mayor es " + mayor)

console.log("punto 5")

var ArregloArticulo=[];
for (var i=0; i<5; i+=1){
    var nombre=prompt ("ingrese el nombre de los articulos");
    ArregloArticulo.push(nombre);
}


var ArregloPrecios=[];
for (var i=0; i<5; i+=1){
    var nombre=prompt ("ingrese el precio de" + ArregloArticulo[i]);
    ArregloPrecios.push(nombre);
}

//punto 6
