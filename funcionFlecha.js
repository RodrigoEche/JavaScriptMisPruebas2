// Uso de funcion flecha => y de metodo .map() de un array
// Sacado de https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// Rodrigo 5/Dic/2022
// ejecutar en terminal como> node funcionFlecha.js

// Elementos es array de cadenas o elemento individual
const Elementos = ["Hidrogeno","Helio","Litio","Berilio","Boro","Nitrogeno","Oxigeno"];

/* 	.map() se aplica a un array y devolverá un array (mapea no reduce) 
	.map() espera un nombre cualquiera elem que sabe que es el elemento generico del array 
	 que recorre internamente sin que escribamos un bucle for 
	 y nosotros asignamos del lado derecho lo que se espera que la funcion flecha devuelva 
	 por cada elemento que recibe como argummento. En este caso la longitud de cadena.
*/
console.log(   Elementos.map(  elemento => elemento               )   );
console.log(   Elementos.map(  elemento => elemento.length        )   );
console.log(   Elementos.map(  elemento => elemento.slice(0,1)    )   );



