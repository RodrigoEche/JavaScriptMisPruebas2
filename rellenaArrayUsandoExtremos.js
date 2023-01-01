function rellenaArrayUsandoExtremos(array) {
    // array = [2,6] ----> rellenaArrayUsandoExtremos(array) ----> arraySalida = [2,3,4,5,6]

    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    
    const suma = array.reduce(  (acumulador, actual) => acumulador + actual );  
    //const suma = array.reduce(  function(a, b) { return a + b; } );  

    //const inicial = 0;
    //const suma = array.reduce(  (acumulador, actual) => acumulador + actual,   inicial);  
    //const suma = array.reduce(  function(a, b) { return a + b; }, inicial);  
    arraySalida = array;
    return arraySalida;
  }   //Fin de funcion ()

    const array = [2, 6];
    console.log("\nArray de entrada: ");
    console.log(array);
    console.log("\nArray de salida: ");
    console.log( rellenaArrayUsandoExtremos(array));


