function rellenaArrayUsandoExtremos(array) {
    // array = [2,6] ----> rellenaArrayUsandoExtremos(array) ----> arraySalida = [2,3,4,5,6]

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push      
    const arraySalida = [];
    for ( i = array[0]; i <= array[1]; i++ )    arraySalida.push(i);
    
    return arraySalida;
  }   //Fin de funcion ()

  /*
    const array = [-2, 3];
    console.log("\nArray de entrada: ");
    console.log(array);
    console.log("\nArray de salida: ");
    console.log( rellenaArrayUsandoExtremos(array)); */

    module.exports = rellenaArrayUsandoExtremos;


