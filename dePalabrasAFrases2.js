function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    
    return palabras.join(" ");
  }
  

  //.....NO COPIAR A HOMEWORK .....................................................//
  palabras = ['Hola', 'mundo!', '¿CómoEstás?', 'Chau'];
  console.log("..................")
  //console.log("arreglo de entrada -----> " + palabras);
  console.log(palabras);  
  console.log("cadena de salida ------> " + dePalabrasAFrase(palabras) );
  console.log("..................")
  //.................................................................................//