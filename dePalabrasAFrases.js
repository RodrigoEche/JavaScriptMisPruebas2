function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  var arrayNuevo= [];
  arrayNuevo[0] = palabras[0];

  for ( i = 1; i < palabras.length; i++) {
    arrayNuevo.push(' ');
    arrayNuevo.push(palabras[i]);  }

  var cadena = '';
  for ( i = 0; i < arrayNuevo.length; i++)  cadena = cadena + arrayNuevo[i];   

  return cadena;
}

//.......................................

palabras = ['Hola', 'mundo!', '¿Cómo_estás?', 'Debe_salir_con_espacios.'];

console.log(dePalabrasAFrase(palabras));
