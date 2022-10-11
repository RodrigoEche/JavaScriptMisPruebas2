// archivo que implementa funciones matematicas trigonometricas
// cuyo resultado se muestra en la terminal
// para ejecutar desde la terminal> node trigonometricas.js
// RE 10/Oct/2022 (creado como .js editado con Notepad)
// Inspirado en video JSI de soyHenry.com

function mostrarAngulo(algo){
	console.log(' Angulo: ' + algo + ' ');
} 

function mostrarSeno(algo){
	console.log(' Seno: ' + algo + ' ');
} 

function mostrarCos(algo){
	console.log(' Cos: ' + algo + ' ');
} 

function mostrarTan(algo){
	console.log(' Tang: ' + algo + ' ');
} 


function trigonometricas(grados){

	pi = Math.PI;

	radian = grados * pi / 180;
	
	seno = Math.sin(radian);
	cos  = Math.cos(radian);
	tan  = Math.tan(radian);	
	
	mostrarAngulo(angulo);
	mostrarSeno(angulo);
	mostrarCos(angulo);	
	mostrarTan(angulo);
}



console.log('Fin del super programa :-) un pequeño paso inicial...')