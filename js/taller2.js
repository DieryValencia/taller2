function ejer1() {
    document.getElementById("enunciado").innerHTML = '<p> Hacer un algoritmo que imprima el nombre de un producto, clave, preciooriginal y su total con descuento. El descuento lo hace en base a la clave,  Si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento en del 20% (sólo existen dos claves). </p> <input type="button" value="Enviar" onClick="calcular()">';  
}
function calcular() {
    var nombre = prompt("Ingrese el nombre del producto:");
    var clave = prompt("Ingrese la clave del producto (01 o 02):");
    var precioOriginal = parseFloat(prompt("Ingrese el precio original del producto:"));
    var descuento = 0;
    if (clave === "01") {
        descuento = 0.10;
        document.getElementById("resultado").innerHTML = `Producto: ${nombre}, Clave: ${clave}, Precio Original: $${precioOriginal.toFixed(2)}, Descuento: ${descuento * 100}%, Total con Descuento: $${(precioOriginal * (1 - descuento)).toFixed(2)}`; 
    } else if (clave === "02") {
        descuento = 0.20;
        document.getElementById("resultado").innerHTML = `Producto: ${nombre}, Clave: ${clave}, Precio Original: $${precioOriginal.toFixed(2)}, Descuento: ${descuento * 100}%, Total con Descuento: $${(precioOriginal * (1 - descuento)).toFixed(2)}`; 
    } else {
        document.getElementById("resultado").innerHTML = "Clave no válida. Debe ser 01 o 02.";
        return;
    }    
}

function ejer2() {
    document.getElementById("enunciado").innerHTML = '2. Hacer un algoritmo que calcule el total a pagar por la compra de camisas, precio de las camisas 25000. Si se compran tres camisas o más se aplica un descuento del 20% sobre el total de la compra y si son menos de tres camisas un descuento del 10%. <p>  </p> <input type="button" value="Enviar" onClick="calcularCamisas()">';  
}
function calcularCamisas() {
    var cantidad = parseInt(prompt("Ingrese la cantidad de camisas:"));
    var precioCamisa = 25000;
    var total = cantidad * precioCamisa;
    var descuento = 0;
    if (cantidad >= 3) {
        descuento = 0.20;
    } else {
        descuento = 0.10;
    }
    var totalConDescuento = total * (1 - descuento);
    document.getElementById("resultado").innerHTML = `Cantidad de camisas: ${cantidad}, Precio por camisa: $${precioCamisa}, Total sin descuento: $${total.toFixed(2)}, Descuento: ${descuento * 100}%, Total con descuento: $${totalConDescuento.toFixed(2)}`;
}

function ejer5(){
    document.getElementById("enunciado").innerHTML = '<p> 5. Elabore un algoritmo que lea un número negativo e imprima el número y el positivo del mismo. </p> <input type="button" value="Enviar" onClick="positivo()">';  

}
    function positivo() {
        var numero = parseInt(prompt("Ingrese un número negativo:"));
        if (numero < 0) {
            var positivo = -numero;
            document.getElementById("resultado").innerHTML = `Número negativo: ${numero}, Número positivo: ${positivo}`;
        } else {
            document.getElementById("resultado").innerHTML = "Por favor, ingrese un número negativo.";
        }
    }
    