//taller 2 cuadrado Gil y Leon 
// punto1
var areaCua;
 areaCua=prompt("ingrese la medida de un lado del cuadrado");
areaCua= areaCua**2;
console.log ("el area de su cuadrado es", areaCua);
var volumenCu;
 volumenCu=prompt("ingrese la medida de un lado del cubo");
 volumenCu=volumenCu**3;
console.log ("el volumen de su cubo es", volumenCu);
// punto2
var rectanguloB;
rectanguloB=prompt("ingrese la base del rectangulo")
var rectanguloH
rectanguloH=prompt("ingrese la altura del rectangulo")
var areaRentangulo= rectanguloB*rectanguloH
console.log("el area del rectangulo es ", areaRentangulo);
var ladoR1;
 ladoR1=prompt("ingrese la medida de un lateral ");
var ladoR2;
ladoR2=prompt("ingrese la medida del superior del rectangulo");
var perimetro;
perimetro= (ladoR1+ladoR2+ladoR1+ladoR2);//ladoR1+ladoR1+ladoR2+ladoR2;
console.log ("el perimetro del rectangulo es ", perimetro);
// punto3
var radioCirculo;
radioCirculo=prompt("ingrese el radio del circulo");
radioCirculo= radioCirculo**2*3.1416;
console.log("el area de es cuadrado es ", radioCirculo);
var volumenEsfera;
volumenEsfera=prompt("ingrese el valor del radio de la esfera ");
volumenEsfera= (4/3)*3.1416*(volumenEsfera**3);
console.log ("el volumen de su esfera es ", volumenEsfera); 
// punto4
var base1;
var base2;
var h;
base1=prompt ("ingrese la primer base");
base2=prompt ("ingrese la segunda base");
h=prompt ("ingrese la altura");
// revisar formula
var areaTrapezoide= 1/2*(base1+base2)*h
console.log ("el area de su trapezoide es", areaTrapezoide);
// punto5
var largoPiscina;
var anchoPiscina;
var profundidadPiscina;
var litrosPiscina;
largoPiscina=prompt("ingrese el largo de la piscina");
anchoPiscina=prompt("ingrese el ancho de la piscina");
profundidadPiscina=prompt("ingrese la profundidad de la piscina");
litrosPiscina= anchoPiscina*largoPiscina*profundidadPiscina;
console.log ("usted necesitaria ", litrosPiscina, "litros paara llenar su piscina");
// punto6
var alturaPared;
var anchoPared;
var precio;
alturaPared=prompt("ingrese la altura de la pared");
anchoPared=prompt("ingrese el ancho de la pared");
precio= (anchoPared*alturaPared)*22000;
console.log ("su total a pagar es ", precio);
// punto7
// a
var centimetros;
var km;
centimetros=prompt("ingrese los cm que necesita covertir");
km= centimetros/100000;
console.log("su cantidad convertida a km es",km);
var decilitros;
var Litr;
decilitros=prompt("ingrese los decilitros que necesita convertir");
Litr= decilitros/10;
console.log ("su cantidad convertida a Litro es", Litr);
var microgramos;
var G;
microgramos=prompt("ingrese los microgramos que desea convertir");
G= microgramos/1000000;
console.log ("su cantidad comvertida en gramos es", G);
var km2;
var milimetros;
km2=prompt("ingrese los km que desea convertir");
milimetros=km2*1000000;
console.log("su cantidad convertida a milimetros es", milimetros);