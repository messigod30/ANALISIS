//punto 1
console.log("punto 1")
var ciclo1=0;
while(ciclo1<7){
    console.log("va en la iteracion " + ciclo1);
    ciclo1+=1
}

// punto 2
console.log("punto 2")
var ciclo0=0;
while(ciclo0<33){
    console.log("multiplos del 3 =  " + ciclo0);
    ciclo0+=3
}

// punto 3
console.log("punto 3")
var ciclo5=0;
while(ciclo5<52){
    console.log("numeros pares hasta el 50 = " + ciclo5);
    ciclo5+=2
}

// punto 4
console.log("punto 4")
var ciclo8=1;
var numerotope
numerotope=prompt("ingrese hasta el numero que quiere ver los impares")
while(ciclo8<numerotope){
    console.log("numeros impares de "+ numerotope + " son = " + ciclo8);
    ciclo8+=2
}
// punto 5
console.log("punto 5")
var ciclo6
ciclo6=prompt("ingrese un numero")
while((ciclo6 % 2) == 0){
  console.log(ciclo6+ " es numero par")
  ciclo6=prompt("ingrese un numero")

}
// punto 6 
  console.log("punto 6");
 var ciclo7=1;
  var acomulador=0;
  var valorSumar;
  var CantEst=prompt ("Ingrese la cantidad de estudiantes de su salon ");
 
  
 
 while(ciclo7<= CantEst){
    valorSumar=parseInt(prompt("ingrese la edad de el estudainte"))
    acomulador= valorSumar+ acomulador;
    ciclo7+=1;
  }
  console.log("el total del acomulador es " + acomulador)
// punto 7
console.log ("punto 7")
var ciclo9
var ganador 
ciclo9=prompt("ingrese un nombre de jugador de futbol")

while(ciclo9 !="messi"){
    
    ciclo9=prompt("ingrese un nombre de jugador de futbol")
}
console.log("usted ha ganado la rifa ")
// punto 8
console.log("punto 8")
var nombreEs
var ciclo12=1
var VNotas
var notas
var acomulador2=0
var gano 

nombreEs=prompt("ingrese el nombre del estudiante")
notas=prompt("ingrese la cantidad de notas que saco")
while(ciclo12<notas){
    valorSumar=parseInt(prompt("ingrese las notas"))
    acomulador2= VNotas+ acomulador2;
    ciclo12+=1;
    
acomulador2= ((ciclo12 + notas) / notas)

if(acomulador <3.5){

   gano== "gano la materia"
}else{
    gano== "perdio la materia"
}
}
console.log("su nota final es", acomulador2)

