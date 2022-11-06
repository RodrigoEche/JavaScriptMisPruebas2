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
    if (repeticion != 0) {objeto[alfabeto[i]] = repeticion;}
}
    
//retorna el objeto con la estadística de caracteres
return objeto ;
}
console.log(numerosDeCaracteres("adsjfdsfsfjsdjfhacabcsbajda"));


//////////////////////////////////////////////////////////////////////////////////////////////////

  function codigoDe(caracter){
    /* A: 65    Z: 90   a: 97   z: 122    */    
   // return caracter.charCodeAt(0);
  }
  console.log(codigoDe('A'));  console.log(codigoDe('Z'));
  console.log(codigoDe('a'));  console.log(codigoDe('z'));

  //..............................................................................
  function esMayuscula(caracter){
    /* 0: no es mayuscula   1: es mayuscula   2: otro caracter*/

    const codigo = caracter.charCodeAt(0);

    if (codigo >= 65 && codigo <= 90) return true;
    if (codigo >= 97 && codigo <= 122) return false; else return 2; //tercer estado qubit
  }
  console.log(esMayuscula('A'));  console.log(esMayuscula('Z'));
  console.log(esMayuscula('a'));  console.log(esMayuscula('z'));
  console.log(esMayuscula('&'));  console.log(esMayuscula('¿'));
 //..............................................................................
  function string2array(cadena){
    array = cadena.split('');
    return array;
  }

  console.log(string2array('hola'));


  function capToFront(s) {
    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
    //al principio de la palabra.
    //Ejemplo: soyHENRY -> HENRYsoy
    //Escribe tu código aquí
 
    //convierto la cadena a Array de caracteres. CREO QUE NO ES NECESARIO
    array = string2array(s);

    //rellenar nuevo array con mayusculas solamente y en orden
    //rellenar otro array con minusculas solamente
    //unir array mayusculas luego array minusculas
    arrayMayusculas = []; arrayMinusculas = [];

    for (i = 0; i< s.length; i++ ){
      if (esMayuscula(array[i]) ) {arrayMayusculas.push(array[i]); } else {arrayMinusculas.push(array[i]); }
    }
    
    arrayFinal = arrayMayusculas;
    for (i = 0; i< arrayMinusculas.length; i++ )   arrayFinal.push(arrayMinusculas[i]);

    cadenaFinal = arrayFinal.reduce( (ac, elem) => {return ac + elem;})

    return cadenaFinal;
  }

  console.log(capToFront('soyHENRY'));
//////////////////////////////////////////////////////////////////////////////////////////////////

function asAmirror(str) {
    //La función recibe una frase. 
    //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
    //pero con cada una de sus palabras invertidas, como si fuera un espejo.
    //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
    //Escribe tu código aquí
    array1 = []; 
    array2 = [];

    array1 = str.split(' ');    
    //array1 = [ 'The', 'Henry', 'Challenge', 'is', 'close!' ]

    for (i = 0; i< array1.length; i++ ){ 
        palabra = array1[i]; 
        // palabra = 'The'
        arbalap = '';
        for (j = 0; j< palabra.length; j++ ){ arbalap = arbalap + palabra[palabra.length-j-1];     }        
        // arbalap = 'ehT'

        array2.push( arbalap);
    }
    // array2 = [ 'ehT', 'yrneH', 'egnellahC', 'si', '!esolc' ]

    cadenaFinal = array2.reduce( (ac, elem) => {return ac + ' ' + elem;})
    // cadenaFinal = 'ehT yrneH egnellahC si !esolc'

    return cadenaFinal;
  } 

  console.log(asAmirror("The Henry Challenge is close!")); 

  //////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////
