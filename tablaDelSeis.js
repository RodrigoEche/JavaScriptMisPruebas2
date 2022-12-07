function tablaDelSeis(){
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí  
    var array1 = [];
    for (i = 0; i <= 10; i++) array1.push(i);
    var array2 = array1.map(  e => e * 6  )

    var array = new Array(11).fill(0);
    var arrayMultiplos =  array.map(   ( e, index ) => index * 6   );  
    var sumaMultiplos =  arrayMultiplos.reduce(   ( previo, actual, index ) => previo + actual  );  
    var sumaManual = 0+6+12+18+24+30+36+42+48+54+60;

    return {array1,array2,array,arrayMultiplos,sumaMultiplos, sumaManual };
  }
console.log(tablaDelSeis())