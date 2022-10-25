function suma(num1, num2){
    var resultado = num1 + num2;
var mensaje =  resultado;
return resultado;
}
function resta(num1, num2){
    var resultado = num1 - num2;
var mensaje =  resultado;
return resultado;
}
function division(num1, num2){
    var resultado = num1 / num2;
var mensaje =  resultado;
return resultado;
}
function Multiplicacion(num1, num2){
    var resultado = num1 * num2;
var mensaje =  resultado;
return resultado;
}
function Potencia(num1, num2){
    var resultado = num1 ** num2;
var mensaje =  resultado;
return resultado;
}



    function main_geometria(){
        var eleccion2 = prompt("por favor ingrese que opcion quiere escoger: \n 1. Área \n 2. Perímetro")
        

        var eleccion= prompt(" por favor ingrese que figura quiere escoger \n 1. Cuadrado \n 2. Paralelogramo")
    var num1= parseFloat(prompt("ingrese el primer valor"))
    var num2= parseFloat(prompt("ingrese el segundo valor"))
    if(eleccion2==1){
if(eleccion==1 ){
    console.log(Potencia(num1, 2))
}else if(eleccion==2){
    console.log(Multiplicacion(num1, num2))
}
    }else if(eleccion2==2){
        if(eleccion==1 ){
            console.log(Multiplicacion(num1, 4))
        }else if(eleccion==2){
            var resultado1=(Multiplicacion(num1, 2))
            var resultado2=(Multiplicacion(num2, 2))
            console.log(suma(resultado1, resultado2))
        }


    }
}