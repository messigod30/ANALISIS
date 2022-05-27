// punto 1
for(var i=1; i<=10 ;i++){

    console.log(i)
}

// punto 2
for(var i=10; i>=1 ;i--){

    console.log(i)
}

// punto 3
var limite=prompt("ingrese el limite")
var sumatoria=0
for(var i=0; i<=limite; i++){
sumatoria+=i;
}
console.log(sumatoria);
// punto4 

var inicio=parseInt(prompt("ingrese el inicio"));
var fin=prompt("ingrese el fin");
for(var i=inicio; 1<=fin; i++){
if(i%2==0){
    console.log(i);
}
}
console.log(sumatoria);

// punto 5
var arregloNombres=[];
for(var i=0; i<5; i++){
    var nombre=prompt("ingrese un nombre")
    arregloNombres.push(nombre)
}
console.log(arregloNombres)

//punto 6 
var arregloNombress=[];
for(var i=0; i<5; i++){
    var nombree=prompt("ingrese un nombre");
    arregloNombress.push(nombree);
}
for(var i=0; i <arregloNombress.length; i++){
    console.log("el nombre" +i+ "es" + console.log(arregloNombress[i]))

}

console.log(arregloNombress);

//punto 7
var cantNotas = parseInt(prompt("ingrese la cantidad"));
var arregloNotas=[];
for(var i=0; i<cantNotas; i++){
    var nota=parseFloat(prompt("nota" +(i+1)));
    arregloNotas.push(nota);
    }

//punto 8

