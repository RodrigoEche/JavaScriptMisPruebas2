
function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    function mostrar(msg) {console.log(msg);};
  
    var n  = numeros.length;  
    var mayor = numeros[0];
    
    for (i = 1; i < n ; i++ ) {	
        valor  = numeros[i]; 
        if (mayor < valor ) mayor = valor;      
    }
  
    return mayor;
  }
  //..........................................
  numeros = [1,2,3,4,3,4,3,2]
  console.log('Mayor: ' + numeroMasGrande(numeros))
