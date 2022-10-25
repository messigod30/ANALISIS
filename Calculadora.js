function suma(num1, num2){
    var resultado = num1 + num2;
var mensaje = "El resultado de sumar " + num1 + " y " + num2 + " es " + resultado;
return resultado;
}
function resta(num1, num2){
    var resultado = num1 - num2;
var mensaje = "El resultado de restar " + num1 + " y " + num2 + " es " + resultado;
return resultado;
}
function division(num1, num2){
    var resultado = num1 / num2;
var mensaje = "El resultado de dividir " + num1 + " y " + num2 + " es " + resultado;
return resultado;
}
function Multiplicacion(num1, num2){
    var resultado = num1 * num2;
var mensaje = "El resultado de multiplicar " + num1 + " y " + num2 + " es " + resultado;
return resultado;
}
function Potencia(num1, num2){
    var resultado = num1 ** num2;
var mensaje = "El resultado de potenciar " + num1 + " y " + num2 + " es " + resultado;
return resultado;
}

function main_calculadora(){
    var eleccion = prompt("por favor ingrese el numero de la operacion que desea realizzar: \n 1.suma \n 2.Resta \n 3. Division \n 4.Multiplicacion \n 5.Potencia ")

    var numero1 = parseFloat(prompt("por favor ingrese el primer valor:"));
    var numero2 = parseFloat(prompt("por favor ingrese el segundo valor:"));

    if(eleccion == 1){
        console.log(suma(numero1, numero2));
    }else if(eleccion == 2){  
        console.log(resta(numero1, numero2));
    }else if (eleccion == 3){
        console.log(division(numero1, numero2));
    }else if (eleccion == 4){  
        console.log(Multiplicacion(numero1, numero2));
    }else if (eleccion == 5){
            console.log(Potencia(numero1, numero2));
    }else if (eleccion == 6){
        var resultadoSuma = suma(numero1, numero2);
        console.log("el doble de la suma de " + numero1 + " y " + numero2 + " es " + Multiplicacion (resultadoSuma, 2))
    }else if(eleccion == 7){
        var resultadoProducto = Multiplicacion (numero1, numero2);
        console.log("la mitad del producto entre " + numero1 + " y " + numero2 + " es " + division(resultadoProducto, 2))
        
    }

    }