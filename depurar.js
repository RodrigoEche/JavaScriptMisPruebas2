/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:
  nuevoArray = [];
  for ( let i = 0; i < array.length; i++) 
  {   
        if (Number.isInteger(array[i]) === true )     nuevoArray.push(array[i]);
  }
return nuevoArray;
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//DEPURACION MANUAL USANDO CONSOLE.LOG() Y NODE EN TERMINAL
// POR FUERA DE LA FUNCION PONE UNO O VARIOS CONSOLE.LOG() 
var entrada = [ 1, 'Henry', 2];
console.log(              entrada  );
console.log( soloNumeros( entrada  ));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//EN LA TERMINAL PONE >node depurar.js
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module.exports = soloNumeros