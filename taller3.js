//Taller Manguera
var Litros;
var Tiempo;
Litros=prompt("ingrese la cantidad de litros que caben en su piscina");
Tiempo=Litros/145
console.log("el tiempo en que se llena su piscina es "+ Tiempo +"horas");
// punto 2
var metros;
var milimetros1;
metros=prompt("ingrese la longitud que desea convertir");
milimetros1=metros*1000;
console.log("su longitud convertida de metros a milimetros es "+ milimetros1);
//punto 3
var decimetros;
decimetros=milimetros1/100;
console.log("su longitud de metros a decimetros es " + decimetros);
//punto 4 
var kilometros;
kilometros=decimetros/10000;
console.log("su longitud convertida a kilometros es " + kilometros);

//punto 5
var horas1;
var dinero;
horas1=prompt("ingrese la cantidad de horas que duro la llamada");
dinero= horas1*(120*60);
console.log("el valor de su llamada es "+ dinero);
// punto 6 
var horasC;
var pago;
horasC=prompt("cuantas horas adicionales tuvo ");
pago= (horasC-1)*(25000) + 40000;
console.log("el pago que tiene que realizar en total es de "+pago); 

