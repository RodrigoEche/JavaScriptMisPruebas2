function numerosDeCaracteres(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z '];
//string = "adsjfdsfsfjsdjfhacabcsbajda"

objeto = {};
for (i = 0; i < alfabeto.length; i++) {
  repeticion = 0;
  for (j = 0; j < string.length; j++) {
      if (alfabeto[i] === string[j]) {repeticion++;}
  }
  if (repeticion != 0) { objeto[alfabeto[i]] = repeticion; }
}
  
//retorna el objeto con la estadística de caracteres
return objeto ;
}
  //........................................................

  console.log(numerosDeCaracteres('hola'));

  

  