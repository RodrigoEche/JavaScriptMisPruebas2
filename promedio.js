function promedio(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    function mostrar(msg) {console.log(msg);};
    var n = 0;
    var suma =0;
    var promedio = 0;

    var r = resultadosTest[0].length;
	
    var c = resultadosTest.length; 
    
    mostrar(r + ' x ' + c);

    for (i = 0; i < c ; i++ ) {	
      for (j = 0; j < r; j++) {       
	aij = resultadosTest[i] [j]; mostrar(aij);
        suma = suma + aij;
 	n++;	
      }
    mostrar(' ');
    }
    mostrar(' suma: ' + suma);
    mostrar(' n:    ' + n);

    promedio = suma / n; 
    return promedio;
  }

//...............................
array1 = [[4,6,8],[7,12,6],[7,12,33],[7,12,9]]; //3x4
array2 = [[4,6],[7,12],[7,33],[12,9]]; 		//2x4
array3 = [[4,6,8,9,0],[7,6,6,12,6],[7,3,4,12,33],[7,0,8,12,9]]; //5x4
array4 = [[8],[12],[40],[0]]; 		//2x4 prom 10
array5= [10,10,16,12]; //prom 12

console.log(' prom: '+promedio(array5))

