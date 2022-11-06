/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function pluck(array, propiedad) {
    // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
    // propiedad.
    // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
    // Ej:    // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
    // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
    // Pista: es una buena oportunidad para usar map.      // Tu código acá:

    //solución clásica con bucles for() ....  hacer
    
    //return array[0][propiedad];  --> porque si vale?
    //return array[0].propiedad;   --> porque no vale?

    //solución con funcion superior: array.map()
    nuevoArray = array.map(elemento => { return elemento[propiedad];})
    return nuevoArray;
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  var arrayObjetos = [ { name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 } ];

  console.log(pluck(arrayObjetos, 'name')) ;

/////////////////////////////////////////////////////////////////////////////////////////////////////

  // No modifiques nada debajo de esta linea //
  
  module.exports = pluck