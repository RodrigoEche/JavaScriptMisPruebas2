function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:
  
   // Solución clásica bucle For(): PASÓ EL TEST
   var nuevo = [];
   for (let i = 0; i < array.length; i++){  if ( array[i][0] === 'a') nuevo.push(array[i]);     }      

//Solución con función Callback: PASÓ EL TEST 
 var nuevo = [];
 function procesar(elemento,indice,arreglo) {  if (elemento[0] === 'a')   nuevo.push(elemento );  }
 array.forEach( procesar );
 return nuevo; 

 //Solución con función Arrow: PASÓ EL TEST
 var nuevo = [];
 array.forEach(elem => {  if ( elem[0] === 'a') nuevo.push( elem )  });
 return nuevo; 

 // Solución con función Inline anónima: PASÓ EL TEST 
var nuevo = [];
 array.forEach( function (elemento) { if (elemento[0] === 'a')   nuevo.push(elemento );} );
 return nuevo;
  }
  console.log((['abajo', 'pera', 'escalera', 'alerta', 'indice', 'azteca', 'arbol', 'buzo','ANALIA','ananá'])); 
  console.log(filter(['abajo', 'pera', 'escalera', 'alerta', 'indice', 'azteca', 'arbol', 'buzo','ANALIA','ananá'])); 