function sumatoria(array) {
    // array = [2,1,4,6] ----> sumatoria(array) ----> 2 + 1 + 4 + 6 = 13

    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce    
    const suma = array.reduce(  (acumulador, actual) => acumulador + actual );  
    //const suma = array.reduce(  function(a, b) { return a + b; } );  

    //const inicial = 0;
    //const suma = array.reduce(  (acumulador, actual) => acumulador + actual,   inicial);  
    //const suma = array.reduce(  function(a, b) { return a + b; }, inicial);  

    return suma;
  }   //Fin de funcion sumatoria()
/*  const array = [2, 1, -5, 7];
    console.log(array);
    console.log("Sumatoria: " + sumatoria(array)); */

    module.exports = sumatoria;
