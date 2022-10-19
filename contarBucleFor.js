
// archivo que muestra en consola el indice del bucle for
// para ejecutar desde la terminal> node contarBucleFor.js
// RE 13/Oct/2022 (creado como .js editado con Notepad)
// Inspirado en video JSII de soyHenry.com



//+++++++++++++++++++++++++++++++++++
// contar todo
function contar() {    	
	for(var i = 0; i < 10; i++) {
		console.log(i);
	};   
}
//+++++++++++++++++++++++++++++++++++
// contar y mostrar en un rango de valores

function contar() {    	
	for(var i = 1; i <= 12; i++) {
		if (i >= 4 && i <= 10) {console.log(i);};				
	};   
}
//+++++++++++++++++++++++++++++++++++
// preguntar, contar y mostrar en un rango de valores

function contar() {    	
	// NO ANDUBO var resultado= window.prompt("Contar hasta", 20);
	for(var i = 1; i <= 12; i++) {
		if (i >= 4 && i <= 8) {console.log(i);};				
	};   
}
//+++++++++++++++++++++++++++++++++++
// contar y mostrar ------------------->    SOLO NROS PARES (  i % 2 ) "i módulo 2"

function contar() {    	
	for(var i = 1; i <= 120; i++) {
		//if ( !(i % 2)) {console.log(i);}; es valida también
		if (  (i % 2)===0 ) {console.log(i);};
	};   
}

//+++++++++++++++++++++++++++++++++++
// contar y mostrar pares hasta un valor dado al llamar la funcion

function contar(n) {    	
	for(var i = 1; i <= 1200; i++) {	       	// contador bobo
		if ( i > n ) { return;};		// sale a lo bestia
		if (  (i % 2)===0 ) {console.log(i);};		
	};   
}
//+++++++++++++++++++++++++++++++++++
// contar y mostrar pares hasta un valor dado al llamar la funcion

function contar(n) {   
	// busca nros pares 	
	for(var i = 0; i <= n; i++) if (  (i % 2)===0 ) {console.log(i);};		
	// busca nros impares 	
	for(var i = 0; i <= n; i++) if (  (i % 2)===0 ) {console.log(i+1);};		
	
}
//+++++++++++++++++++++++++++++++++++

contar(20);


