//..............................................................
function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    x=str1.length; //OJO .length con minusculas!!!
    y=str2.length; 
    if (x===y )
    { bul= true;}
  else   
    { bul=false; }
  return x+ '    ' + y; 
  }
//..............................................................
console.log( 'Resultado: '   +  tienenMismaLongitud('algo1','algo')      );

// llamo la funcion sin sus () para que me muestre su definicion
console.log( 'Resultado: '   +  tienenMismaLongitud      );

//..............................................................



