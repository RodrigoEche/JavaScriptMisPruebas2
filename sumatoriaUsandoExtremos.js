const rellenaArrayUsandoExtremos = require('./rellenaArrayUsandoExtremos.js');
const sumatoria = require('./sumatoria.js');

function sumatoriaUsandoExtremos(arrayExtremos) {
    const array = rellenaArrayUsandoExtremos(arrayExtremos);
    const suma = sumatoria(array);
    return suma;
}; //fin de funcion()

const array = [2, 5];
console.log("\nArray de Extremos: ");
console.log(array);
console.log("\nArray de valores: ");
console.log(rellenaArrayUsandoExtremos(array));
console.log("\nSuma elementos: ");
console.log( sumatoriaUsandoExtremos(array));