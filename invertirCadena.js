function invertirCadena(cadena) {
    // cadena = "Hola chico" ----> invertirCadena(cadena) ----> cadenaSalida = "ocihc aloH"

    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map#ejemplos
  
    cadenaSalida = [].map.call(   cadena, function(x) { return x; }   ).reverse().join('');;
    return cadenaSalida;
  }   //Fin de funcion ()

    const cadena = "Hola chico ¿Cómo estás?";
    console.log("\nCadena de entrada: ");
    console.log(cadena);
    console.log("\nCadena de salida: ");
    console.log( invertirCadena(cadena));


