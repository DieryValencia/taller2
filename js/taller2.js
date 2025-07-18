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

function ejer3() {
    document.getElementById("enunciado").innerHTML = '<p> 3. En un supermercado se hace una promoción, mediante la cual el cliente obtiene un descuento dependiendo de un número que se escoge al azar los numeros deben de estar entre 1 y 10. Si el número escogido es menor que 10 el descuento es del 15% sobre el total de la compra, si es menor o igual a 5 el descuento es del 20%. Obtener cuánto dinero se le descuenta.   </p> <input type="button" value="Enviar" onClick="calcularDescuento()">';  
}
function calcularDescuento() {
    var totalCompra = parseFloat(prompt("Ingrese el total de la compra:"));
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    var descuento = 0;
    if (numeroAleatorio <= 5) {
        descuento = 0.20; 
    }else if (numeroAleatorio < 10) {
        descuento = 0.15; 
    } else {
        descuento = 0; 
    }
    var totalDescuento = totalCompra * descuento;
    var totalConDescuento = totalCompra - totalDescuento;
    document.getElementById("resultado").innerHTML = `Número aleatorio: ${numeroAleatorio}, Total de la compra: $${totalCompra.toFixed(2)}, Descuento: ${descuento * 100}%, Monto descontado: $${totalDescuento.toFixed(2)}, Total con descuento: $${totalConDescuento.toFixed(2)}`;
}

function ejer4() {
    document.getElementById("enunciado").innerHTML = '<p> 4. Calcular el número de pulsaciones que debe tener una persona por cada 10 segundos de ejercicio aeróbico; la fórmula que se aplica cuando el sexo es femenino es: <br> num. pulsaciones ← (220 - edad)/10 <br> y si el sexo es masculino: <br> num. pulsaciones ← (210 - edad)/10   </p> <input type="button" value="Enviar" onClick="calcularPulsaciones()">';  
}
function calcularPulsaciones() {
    var edad = parseInt(prompt("Ingrese su edad:"));
    var sexo = prompt("Ingrese su sexo (femenino/masculino):").toLowerCase();
    var pulsaciones = 0;
    if (sexo === "femenino") {
        pulsaciones = (220 - edad) / 10;
    } else if (sexo === "masculino") {
        pulsaciones = (210 - edad) / 10;
    } else {
        document.getElementById("resultado").innerHTML = "Sexo no válido. Debe ser 'femenino' o 'masculino'.";
        return;
    }
    document.getElementById("resultado").innerHTML = `Edad: ${edad}, Sexo: ${sexo}, Número de pulsaciones por cada 10 segundos de ejercicio: ${pulsaciones.toFixed(2)} pulsaciones. `;
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

function ejer6() {
    document.getElementById("enunciado").innerHTML = '<p> 6. Hacer un algoritmo que permita pasa de kilogramos a gramos y toneladas.  </p> <input type="button" value="Enviar" onClick="convertirKilos()">';  
}
function convertirKilos() {
    var kilos = parseFloat(prompt("Ingrese la cantidad en kilogramos:"));
    if (isNaN(kilos) || kilos < 0) {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese un número válido de kilogramos.";
        return;
    }
    var gramos = kilos * 1000;
    var toneladas = kilos / 1000;
    document.getElementById("resultado").innerHTML = `${kilos} kilogramos son ${gramos} gramos y ${toneladas} toneladas.`;
}

function ejer7() {
    document.getElementById("enunciado").innerHTML = '<p> 7. Un paquete de galletas cuesta $3.500 y contiene 15 galletas, cuánto cuestan X cantidad de galletas de ellas? Elabore un algoritmo para obtener la respuesta.  </p> <input type="button" value="Enviar" onClick=" valorGalletas()">';  
}
function valorGalletas() {
    var cantidadGalletas = parseInt(prompt("Ingrese la cantidad de galletas:"));
    var precioPaquete = 3500;
    var galletasPorPaquete = 15;
    if (isNaN(cantidadGalletas) || cantidadGalletas <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese una cantidad válida de galletas.";
        return;
    }
    var precioPorGalleta = precioPaquete / galletasPorPaquete;
    var total = cantidadGalletas * precioPorGalleta;
    document.getElementById("resultado").innerHTML = `Cantidad de galletas: ${cantidadGalletas}, Precio por galleta: $${precioPorGalleta.toFixed(0)}, Total a pagar: $${total.toFixed(0)}`;
}

function ejer8() {
    document.getElementById("enunciado").innerHTML = '<p> 8.  Si 15 cuadernos cuestan $75000, cuánto cuestan X cantidad de cuadernos?. Elabore un algoritmo para hallar la respuesta correcta. </p> <input type="button" value="Enviar" onClick=" calcularCuadernos()">';  
}
function calcularCuadernos() {
    var cantidadCuadernos = parseInt(prompt("Ingrese la cantidad de cuadernos:"));
    var precioPaquete = 75000;
    var cuadernosPorPaquete = 15;
    if (isNaN(cantidadCuadernos) || cantidadCuadernos <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese una cantidad válida de cuadernos.";
        return;
    }
    var precioPorCuaderno = precioPaquete / cuadernosPorPaquete;
    var total = cantidadCuadernos * precioPorCuaderno;
    document.getElementById("resultado").innerHTML = `Cantidad de cuadernos: ${cantidadCuadernos}, Precio por cuaderno: $${precioPorCuaderno.toFixed(0)}, Total a pagar: $${total.toFixed(0)}`;
}

function ejer9() {
    document.getElementById("enunciado").innerHTML = '<p> 9. Realizar un programa que cuente de 1 a 200 e imprima en pantalla los números divisibles por 6, y cuando llegue a 200 cuente de forma regresiva hasta 20 e imprima los divisibles por 8. </p> <input type="button" value="Enviar" onClick="contarDivisibles()">';  
}
function contarDivisibles() {
    var resultado = "";
    // Contar de 1 a 200 e imprimir los divisibles por 6
    for (var i = 1; i <= 200; i++) {
        if (i % 6 === 0) {
            resultado += i + " ";
        }
    }
    resultado += "<br>Contando de forma regresiva desde 200 hasta 20:<br>";
    
    // Contar de forma regresiva desde 200 hasta 20 e imprimir los divisibles por 8
    for (var j = 200; j >= 20; j--) {
        if (j % 8 === 0) {
            resultado += j + " ";
        }
    }
    
    document.getElementById("resultado").innerHTML = resultado;
}

function ejer10() {
    document.getElementById("enunciado").innerHTML = '<p> 10. Realizar un programa que capture el nombre de dos personas y las fechas de nacimiento con cada campo por separado día, mes y año y calcule la edad de dos personas diferentes y diga cuál de ellos es mayor.</p> <input type="button" value="Enviar" onClick="calcularEdad()">';  
}
function calcularEdad() {
    var nombre1 = prompt("Ingrese el nombre de la primera persona:");
    var dia1 = parseInt(prompt("Ingrese el día de nacimiento de " + nombre1 + ":"));
    var mes1 = parseInt(prompt("Ingrese el mes de nacimiento de " + nombre1 + ":"));
    var anio1 = parseInt(prompt("Ingrese el año de nacimiento de " + nombre1 + ":"));

    var nombre2 = prompt("Ingrese el nombre de la segunda persona:");
    var dia2 = parseInt(prompt("Ingrese el día de nacimiento de " + nombre2 + ":"));
    var mes2 = parseInt(prompt("Ingrese el mes de nacimiento de " + nombre2 + ":"));
    var anio2 = parseInt(prompt("Ingrese el año de nacimiento de " + nombre2 + ":"));

    var fechaActual = new Date();
    var edad1 = fechaActual.getFullYear() - anio1;
    var edad2 = fechaActual.getFullYear() - anio2;

    if (fechaActual.getMonth() < mes1 - 1 || (fechaActual.getMonth() === mes1 - 1 && fechaActual.getDate() < dia1)) {
        edad1--;
    }
    if (fechaActual.getMonth() < mes2 - 1 || (fechaActual.getMonth() === mes2 - 1 && fechaActual.getDate() < dia2)) {
        edad2--;
    }

    var resultado = `${nombre1} tiene ${edad1} años y ${nombre2} tiene ${edad2} años. `;
    
    if (edad1 > edad2) {
        resultado += `${nombre1} es mayor que ${nombre2}.`;
    } else if (edad2 > edad1) {
        resultado += `${nombre2} es mayor que ${nombre1}.`;
    } else {
        resultado += `${nombre1} y ${nombre2} tienen la misma edad.`;
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function ejer11() {
    document.getElementById("enunciado").innerHTML = '<p> 11. Un programa que me capture el salario de un empleado y me realice el descuento de pensión y salud, pero si el salario es superior a 1200000 no le debe descontar.  </p> <input type="button" value="Enviar" onClick="calcularDescuentos()">';  
}
function calcularDescuentos() {
    var salario = parseFloat(prompt("Ingrese el salario del empleado:"));
    var descuentoPension = 0.04; // 4%
    var descuentoSalud = 0.04; // 4%
    var totalDescuento = 0;

    if (salario <= 1200000) {
        totalDescuento = salario * (descuentoPension + descuentoSalud);
        var salarioNeto = salario - totalDescuento;
        document.getElementById("resultado").innerHTML = `Salario: $${salario.toFixed(2)}, Descuento de pensión: $${(salario * descuentoPension).toFixed(2)}, Descuento de salud: $${(salario * descuentoSalud).toFixed(2)}, Total descuento: $${totalDescuento.toFixed(2)}, Salario neto: $${salarioNeto.toFixed(2)}`;
    } else {
        document.getElementById("resultado").innerHTML = `Salario superior a $1200000, no se aplican descuentos. Salario neto: $${salario.toFixed(2)}`;
    }
}

function ejer12() {
    document.getElementById("enunciado").innerHTML = '<p> 12. Un programa que, capture el salario de un empleado, y lo divida por 30 dias del mes, también debe capturar los días trabajados y me debe mostrar el total ganado.  </p> <input type="button" value="Enviar" onClick="calcularSalarioDiario()">';  
}
function calcularSalarioDiario() {
    var salario = parseFloat(prompt("Ingrese el salario mensual del empleado:"));
    var diasTrabajados = parseInt(prompt("Ingrese los días trabajados en el mes:"));

    if (isNaN(salario) || isNaN(diasTrabajados) || diasTrabajados < 0 || diasTrabajados > 30) {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese valores válidos.";
        return;
    }

    var salarioDiario = salario / 30;
    var totalGanado = salarioDiario * diasTrabajados;

    document.getElementById("resultado").innerHTML = `Salario mensual: $${salario.toFixed(2)}, Salario diario: $${salarioDiario.toFixed(2)}, Días trabajados: ${diasTrabajados}, Total ganado: $${totalGanado.toFixed(2)}`;
}

function ejer13() {
    document.getElementById("enunciado").innerHTML = '<p> 13. Mientras a<=1500; contar hasta 1500 e imprimir los números divisibles por 4 y 5 y decir si son pares o impares.  </p> <input type="button" value="Enviar" onClick="contar()">';  
}
function contar() {
    var resultado = "";
    for (var a = 1; a <= 1500; a++) {
        if (a % 4 === 0 && a % 5 === 0) {
            resultado += `${a} es divisible por 4 y 5, `;
        } else if (a % 4 === 0) {
            resultado += `${a} es divisible por 4, `;
        } else if (a % 5 === 0) {
            resultado += `${a} es divisible por 5, `;
        }
        
        if (a % 2 === 0) {
            resultado += `${a} es par.<br>`;
        } else {
            resultado += `${a} es impar.<br>`;
        }
    }
    document.getElementById("resultado").innerHTML = resultado;
}

function ejer14() {
    document.getElementById("enunciado").innerHTML = '<p> 14. Elaborar un algoritmo, que tenga 10 números enteros. El programa debe sumar todos los números que sean múltiplos de 3.  </p> <input type="button" value="Enviar" onClick="sumarMultiplos()">';  
}
function sumarMultiplos() {
    var suma = 0;
    for (var i = 1; i <= 10; i++) {
        var numero = parseInt(prompt("Ingrese el número " + i + ":"));
        if (numero % 3 === 0) {
            suma += numero;
        }
    }
    document.getElementById("resultado").innerHTML = `La suma de los números múltiplos de 3 es: ${suma}`;
}

function ejer15() {
    document.getElementById("enunciado").innerHTML = '<p> 15. Mostrar las 30 primeras potencias de 3 y la suma de ellos. </p> <input type="button" value="Enviar" onClick="potenciasDeTres()">';  
}
function potenciasDeTres() {
    var resultado = "";
    var suma = 0;
    for (var i = 0; i < 30; i++) {
        var potencia = Math.pow(3, i);
        resultado += `3^${i} = ${potencia}<br>`;
        suma += potencia;
    }
    resultado += `<br>La suma de las 30 primeras potencias de 3 es: ${suma}`;
    document.getElementById("resultado").innerHTML = resultado;
}

    