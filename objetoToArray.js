function deObjetoAmatriz(objeto){
    // Fuente: corresp a homework Extras Henry. Escribe una función que convierta un objeto en una matriz, 
    // donde cada elemento representa un par clave-valor en forma de matriz. Ejemplo: 
    // { D: 1, B: 2, C: 3 } ➞ [["D", 1], ["B", 2], ["C", 3]]    
    
    /* SOLUCION 1
    matriz = [];
    for (let clave in objeto) {let par = [ clave, objeto[clave] ];  matriz.push(par);    };
    return matriz;
    // FIN SOLUCION 1*/

    /*SOLUCION 2
    matriz = [];
    for ( clave in objeto)    {   matriz.push(    [ clave, objeto[clave] ]   );    }
    return matriz;
    // FIN SOLUCION 2*/

     //SOLUCION 3
     claves     = Object.keys(objeto);
     valores    = Object.values(objeto);
     matriz = [];
     for (elem in claves) {  matriz.push(    [ claves[elem] ,  valores[elem] ]    );    };       

     return matriz;
    // FIN SOLUCION 3*/
    
  } 
//.....NO COPIAR A HOMEWORK .....................................................//
console.log(({D: 1, B: 2, C:3}))
console.log(deObjetoAmatriz({D: 1, B: 2, C:3}))

//.................................................................................//