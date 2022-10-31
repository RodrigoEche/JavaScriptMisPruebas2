/* Pruebas relacionadas a CallBacks y metodos de orden superior de arrays
*/

//....................................................................................
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const numeros = [ 15, 16, 17, 18, 19 ]; // suma = 85
const palabras =[ "Hola", "mi", "nombre", "es", "Martín" ];

// FUNCIONES CALLBACK CON VALOR INICIAL PARA EL ACUMULADOR
console.log("USANDO CALLBACK FUNCTIONS DENTRO DEL reduce(): índices, valor actual y valor acumulado con VALOR INICIAL")

function sumar2(acumulado,actual,indice) {  
    acumulado = acumulado + actual;
    console.log(indice + "  " + actual + '   '+ acumulado);
    return acumulado; 
}
// OJO   CONVIENE TRABAJAR CON UN VALOR INICIAL, ASI BARRE DESDE INDICE 0 DEL ARRAY
const valorInicialdelReduce = 10;   

console.log(' ');   console.log( numeros );
console.log("i  v(i) acc(i) inicial = " + valorInicialdelReduce);
numeros.reduce(sumar2,valorInicialdelReduce);

console.log(' ');   console.log( numeros );
console.log("i  v(i) acc(i) inicial = " + valorInicialdelReduce);
console.log(numeros.reduce(sumar2,valorInicialdelReduce));

// FUNCIONES ARROW CON VALOR INICIAL PARA EL ACUMULADOR
console.log("USANDO ARROW FUNCTIONS DENTRO DEL reduce(): índices, valor actual y valor acumulado con VALOR INICIAL")
console.log(' ');   console.log( numeros );
console.log("i  v(i) acc(i) inicial = " + valorInicialdelReduce);
numeros.reduce( (acumulado,actual,indice) => {  
    acumulado = acumulado+actual; 
    console.log(indice + "  " + actual + '   '+ acumulado); 
    return acumulado;  
}, valorInicialdelReduce ); //fin del reduce()

// FUNCIONES ANONIMAS INLINE CON VALOR INICIAL PARA EL ACUMULADOR
console.log("USANDO ANONIMAS INLINE FUNCTIONS DENTRO DEL reduce(): índices, valor actual y valor acumulado con VALOR INICIAL")
console.log(' ');   console.log( numeros );
console.log("i  v(i) acc(i) inicial = " + valorInicialdelReduce);
numeros.reduce( function (acumulado,actual,indice)  {  
    acumulado = acumulado+actual; 
    console.log(indice + "  " + actual + '   '+ acumulado); 
    return acumulado;  
}, valorInicialdelReduce ); //fin del reduce()

// Ejemplo de multiplicar dos numeros con CallBack Function
const numeros2 = [ 15, 16, 17, 18, 19 ]; // suma = 85   producto = 1 395 360
function multiplicarArreglo ( a, b ) { return a * b;}
producto = numeros2.reduce(multiplicarArreglo);
console.log("El resultado de MULTIPLICAR los nros dentro de: [" + numeros2 + "] dá " + producto);
console.log("Verificación: " + (15*16*17*18*19)) // correcto dá producto = 1 395 360

const numeros3 = [ 100, 2, 5, 0.5, 4 ]; // suma =    producto = cociente
function dividirArreglo ( a, b ) { if ( b === 0)  return a; else return a / b;}
cociente = numeros3.reduce(dividirArreglo); // denominador 0 no divide devuelve sin dividir
console.log("El resultado de DIVIDIR los nros (excepto si es 0) dentro de: [" + numeros3 + "] dá " + cociente);
console.log("Verificación: " + (100/2/5/0.5/4)) // correcto dá cociente = 5

// Ejemplo de multiplicar dos numeros con CallBack Function
const numeros4 = [ 15, 16, 17, 18, 19 ]; // suma = 85   producto = 1 395 360
function sumarArreglo ( a, b ) { return a + b;}
suma = numeros2.reduce(sumarArreglo);
console.log("El resultado de SUMA los nros dentro de: [" + numeros4 + "] dá " + suma);
console.log("Verificación: " + (15 + 16 + 17 + 18 + 19)) // correcto dá suma = 85
