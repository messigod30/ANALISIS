// PUNTO 1
console.log ("punto 1")
var ciclo=0;

while(ciclo<5){
    console.log(2)
    ciclo+=1;
}
//Punto 2
console.log("2");
var ciclo2=0;
while(ciclo2<8){
    console.log("va en la iteracion" + ciclo2);
    ciclo2=1;
}

// PUNTO 4
console.log ("punto 4")

var ciclo4=prompt("ingrese ok para parar");

while(ciclo4 !="ok"){
    console.log("dijo " + ciclo4)
    ciclo4=prompt("ingrese ok para parar");
    
}
// punto 5
console.log("punto 5");
var ciclo5=prompt("ingrese un negativo para detenerse");

while ( ciclo5 >= 0){
    console.log("dijo" + ciclo5)
    ciclo5=prompt("ingrese un negativo para detenerse");
}