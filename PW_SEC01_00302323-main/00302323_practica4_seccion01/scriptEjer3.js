//Dado un array de numeros enteros positivos desordenados,
//devolver otro array con los numeros ordenados

function ordenar(arr) {
    const nuevoArray = [...arr];
    for (let i = 0; i < nuevoArray.length; i++) {
        for (let j = 0; j < nuevoArray.length - i - 1; j++) {
            if (nuevoArray[j] > nuevoArray[j + 1]) {
                let temporal = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j + 1];
                nuevoArray[j + 1] = temporal;
            }
        }
    }
    return nuevoArray;
}

console.log(ordenar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Crear una funcion que reciba un numero entero positivo y devuelva
//true si dicho numero es par y false si no lo es

function esPar(numero) {
    return numero % 2 === 0;
}

console.log(esPar(7 ));

//Cada día una planta crece en metros según su velocidadCrecimiento. Cada noche, dicha planta decrece en
//metros en base a su velocidadDecrecimiento debido a la falta de sol. Cuando nace, mide exactamente 0 
//función que reciba velocidadCrecimiento, velocidadDecrecimiento y alturaDeseada como números 
//enteros positivos y devuelva el número de días que tardará la planta en medir la alturaDeseada.

function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let altura = 0;
    let dias = 0;

    while (altura < alturaDeseada) {
        altura += velocidadCrecimiento;
        dias++;
        if (altura >= alturaDeseada) {return dias;}
        altura -= velocidadDecrecimiento;
    }
    return dias;
}

//comprobaciond de la funcion anterior
console.log(calcularDiasCrecimiento(3, 1, 10));  // debería dar 5 días
console.log(calcularDiasCrecimiento(5, 2, 20));  // debería dar 6 días
console.log(calcularDiasCrecimiento(2, 1, 5));   // debería dar 4 días