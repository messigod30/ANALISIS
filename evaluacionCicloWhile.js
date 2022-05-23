// samuel y leon
// punto 1
var max=prompt("ingrese el numero hasta donde quiere conocer los multiplos de 5")//ingresamos el numero maximo
var contador=0//que empiece desde el numero 0

while (contador<= max){//el limite de numeros que nos muestra
    if(contador%5==0){//esta hace la operacion y nos muestra si es multiplo o no, si esto no se haria nada
        console.log("el", contador, "si es multiplo de 5");// para mostrarnos que si es multiplo
      } else{//para poner la otra situacion
          console.log("el",contador,"no es multiplo de 5")//nos muestra que no es multiplo de 5
      }//cierra el else
contador++;//incrementa la variable
 }//cierra el while

//punto 2
var ciclo10=1
var total=0
var CantProd
var precioo

CantProd=prompt("ingrese la cantidad de productos que va a comprar")
while(ciclo10<=CantProd){
    precioo=parseInt(prompt("ingrese el precio del producto"))
total= precioo + total;
ciclo10+=1;
}
console.log("el total a pagar es " + total)
// punto 3
var totall=0
var ciclo3="si"
while(ciclo3!= "no") {
    var precioA=parseInt(prompt("ingrese el precio de cada articulo")) ;
    totall += precioA
    ciclo3=(prompt("ingrese no para parar"))
    
}
console.log ("el total a pagar es " + totall)
// punto 4
var ciclo170="si"
var totalisimo=0
var CantProdu=0
 var preciooo

 while(ciclo170!= "no") {
     preciooo=parseInt(prompt("ingrese el precio de cada articulo")) ;
    totalisimo += preciooo
    ciclo170=(prompt("desea continuar o no"))
totalisimo= preciooo + totalisimo;
CantProdu+=1;
    if(8<CantProdu && CantProdu<14 ){ totalisimo=totalisimo*0.90;
console.log("usted tiene un descuento del 10% su total a pagar es " + totalisimo )
    }else if (15<CantProdu && CantProdu<24){  totalisimo=totalisimo*0.85;
console.log("usted tiene un descuento del 15% su total a pagar es " + totalisimo)
}else if (CantProdu>25){ totalisimo=totalisimo*0.80;
        console.log("usted tiene un descuento del 20% su total a pagar es " + totalisimo)
}else {(CantProdu<=7)
    console.log("usted no tiene descuento")
}

 }
 //punto 5 
 var nopaso
 var nota1= parseInt(prompt(" ingrese las notas que saco en el curso"))
 var nota2
 var ciclo180=1
 var gano=0
 while(ciclo180<=nota1){
     var nota2=parseFloat(prompt("ingrese la nota final que saco el alumno "+ ciclo180))
     ciclo180=1
     if(nota2>=3.5){
         console.log("el alumno paso la materia")
         gano+=1
     }else if (nota2<3.5){  
         console.log("el alumno no paso la materia")
         nopaso+=1

        }
         if(gano>nopaso){  
         console.log("La cantidad de estudiantes no es suficiente para curso de verano")

   }else if (nopaso>=gano){
console.log("Debe abrirse el curso de verano")
   }
 
 
}