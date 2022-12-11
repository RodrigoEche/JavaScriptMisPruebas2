
function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    //for ( i = 0; i < array.length; i++) {array[i]=array[i]+1;}
    //return array;
   
    array = array.map( elemento => elemento = elemento + 1 );
    
    
    return array;
  }

  //.....NO COPIAR A HOMEWORK .....................................................//
  var arreglo = [3, 6, 0, 13, 6, 4];
  console.log("..................")
  console.log("arreglo de entrada -----> " + arreglo);
  console.log("arreglo de salida ------> " + incrementarPorUno(arreglo) );
  console.log("..................")
  //.................................................................................//
