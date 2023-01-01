function rellenaArrayUsandoExtremos(array) {
    // array = [2,6] ----> rellenaArrayUsandoExtremos(array) ----> arraySalida = [2,3,4,5,6]
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push      
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#examples
    //https://lineadecodigo.com/javascript/rellenar-un-array-con-numeros-en-javascript/
    /* const arraySalida = [];
    for ( i = array[0]; i <= array[1]; i++ )    arraySalida.push(i);    
    return arraySalida; */
    const cantidadElementos     =   1 + array[1] - array[0];
    const arraySalida           =  new Array(cantidadElementos);
    //arraySalida.fill(0);
    //arraySalida.forEach(    (valor,indice)   =>   arraySalida[indice] = indice + array[0]  );
    arraySalida.fill(0).map(    (valor,indice)   =>   arraySalida[indice] = indice + array[0]  );
    return arraySalida; 
  }   //Fin de funcion ()

    const array = [-1, 3];
    console.log("\nArray de entrada: ");
    console.log(array);
    console.log("\nArray de salida: ");
    console.log( rellenaArrayUsandoExtremos(array)); 

    module.exports = rellenaArrayUsandoExtremos;


