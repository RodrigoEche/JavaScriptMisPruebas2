function numerosDeCaracteres(string) {
    //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
    //en formato par clave-valor.
    //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
    //Escribe tu código aquí
    cadena = string;

    valor  = cadena[0]
    largo  = cadena.length;

    strValor = String(valor);

    var objeto = Object.create({});
    Object.assign(objeto, {'strValor': 1})
    Object.assign(objeto, {b: 2})


  
    //retorna el objeto con la estadística de caracteres
    return objeto ;
}
  //........................................................

  console.log(numerosDeCaracteres('hola'));

  

  