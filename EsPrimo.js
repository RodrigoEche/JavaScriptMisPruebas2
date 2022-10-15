  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  // Google: Los 25 primeros números primos son 2, 3, 5, 7, 11, 13, 17, 19,
  //     23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 y 97
  // Para saber si un número es primo o compuesto basta con dividirlo por
  // los números primos menores que él hasta llegar a un cociente igual o menor que el divisor. 
  // Si ninguna de estas divisiones es exacta, el número es primo. 
  // Si alguna de las divisiones es exacta el número es compuesto y podemos interrumpir el proceso.
 
function esPrimo(numero) {
 	for ( var k = 2; k < numero; k++)  {
				if ((numero % k) === 0 )  return false;
	}
	return true;
}

//...............................................................................
hasta =2000;
console.log("Nros primos hasta: " + hasta);

for (n = 1; n < hasta; n++){
	if ( esPrimo(n) === true ) console.log(n);}

console.log('...................');

for (n = 2; n < hasta; n++){
if ( esPrimo(n) === true) console.log(n+ ' *');
//if ( esPrimo(n) === false) console.log(n);
}
	
