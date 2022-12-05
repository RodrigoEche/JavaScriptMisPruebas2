function tablaDelSeis(){
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí  

  
  //array3.fill(0);
  //array4 = array3.map(e => e.push(e.length))

  //for (i = 0; i <= 10; i++) array.push(i);
  //array2 = array.map(  e => e * 6  )

  var array = new Array(11).fill(0);
  var arrayMultiplos =  array.map(   ( e, index ) => index * 6   );  
  return arrayMultiplos;
  }


  //lo de abajo no poner en el archivo origen
  //tablaDelSeis()
  console.log(tablaDelSeis())