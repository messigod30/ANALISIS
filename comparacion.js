console.log(2 < 12); //true
console.log(2 < "12"); //false	
console.log(2 < "John");//false	
console.log(2 > "John");//false
console.log(2 == "John");//false
console.log("John" == "John");//true
console.log("john" == "John");//false		
console.log("2" < "12");	//true
console.log("2" > "12");	//false
console.log("2" == "12");//false

console.log("ejercicios")
x=12;   
y=7;

x<15 && y!=7 //f
y>8 && x<20 //f
x==12 && x<18 //t
"lunes" == "Lunes" || y!=9 //t
!(x==10) && y>=6 //t
x>6 && y==12 && 2>3 //f
(x*2)>22 && y<(2*4) //t
(x>10 || x<10) && !(y!=7 && y<21) //t

var tocaEduFisica= "si";
var uniforme = "diario";
 
if(tocaEduFisica == "no"){
    uniforme = "edu. física";
}
 
console.log("Mañana debe vestir el uniforme de " + uniforme);

var hayGaseosa = "no";
var bebida;
 
if(hayGaseosa == "si"){
    bebida = "gaseosa";
}else{
    bebida = "refresco de fruta"
}
 
console.log("la bebida que acompaña su pedido es " + bebida);


var diaSiguiente= "lunes";
var cuaderno;
 
if(diaSiguiente == "lunes" || diaSiguiente == "martes"){
    cuaderno="Análisis";
}else if(diaSiguiente == "miercoles"){
    cuaderno="Tecnología";
}else if(diaSiguiente == "jueves"){
    cuaderno="Desarrollo"
}else{
    cuaderno="Ninguno";
}
 
console.log("Para la clase de mañana con el profesor Andres debe guardar el cuaderno de" +cuaderno);

