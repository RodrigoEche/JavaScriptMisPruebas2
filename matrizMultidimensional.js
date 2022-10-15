// Crea, inicia y muestra una Matriz cuadrada o rectangular
// ejecutar desde terminal > node matrizMultidimensional.js
// https://es.stackoverflow.com/questions/161043/cómo-declarar-una-matriz-cuadrada-en-javascript
// Autor: RE 15/10/2022 inspirado en JSII soyHenry.com

function matriz(renglon,columnas){		
		
		// crear matriz --> Sobre el arreglo comun matriz, en cada uno de sus elementos
		//                  le creas un objeto tipo Array y ahi la haces multidimensional
		var matriz = [];
		for(i = 0; i < columnas; i++) {
		    matriz[i] = new Array(renglon);    		
		}
		
		//llenar matriz con alguna opcion de llenado
		

tipo = 
['todos ceros', 
'todos unos' ,
'todas i', 
'todas j', 
'i mas j', 
'i por j', 
'random', 
'i al cuadrado',
'i elevado a la j' ,
'i elevado a la j a su vez elevada a la j',
'genérica subindices renglón columna i,j ',
'quini: seis nros random entre 0 y 45'];

		OPCION= 11
		
		for(i = 0; i < renglon; i++) {
			for(j = 0; j < columnas; j++) {
				azar=Math.floor(Math.random() * 100); 
				quini=Math.floor(Math.random() * 45); // usar matriz(2,3) para seis nros entre 0 y 45

				switch (OPCION) {
				case 0: relleno = 0;     break;
				case 1: relleno = 1;	 break;  		 
				case 2: relleno = i;	 break;  		 
				case 3: relleno = j;	 break;   		 
				case 4: relleno = i + j; break;	   		 
				case 5: relleno = i * j; break;
				case 6: relleno = azar; break;														case 7: relleno = i **2; break;					
				case 8: relleno = i **j; break;
				case 9: relleno = i **j**j; break;
				case 10: relleno = i + ',' + j; break;
				case 11: relleno = quini; break;

				default: relleno = 666;
				}			//fin case
			matriz[i][j] = relleno;
			}				//fin for j
		}					//fin for i

		//mostrar matriz
		console.log('       ')
console.log('Matrix (' + renglon + ' , ' + columnas + ') Opción: '+ OPCION+ ' (' + tipo[OPCION] + ')');

		for( i = 0; i < renglon; i++) {
			var texto= '';
			for( j = 0; j < columnas; j++) {		   				
				texto = texto + (matriz[i][j]) + '\t';
		}
		console.log(texto);
		console.log('');		
		}	 

}

// INVOCACION DE LA FUNCION
// por ahora solo matrices cuadradas o rectangulares tipo pantalla ie con renglones < columnas
// hasta 20x20 se ve bien en pantalla, mayores computa bien muestra en varias lineas el renglon
matriz(2,3);
matriz(2,3);
matriz(2,3);
matriz(2,3);


