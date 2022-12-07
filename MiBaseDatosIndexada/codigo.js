// BASE DE DATOS INDEXADAS Sacado de "El gran libro de HTML5, CSS3 y JavaScript". Marcombo 2017 pag 485  
// Rodrigo 6 Dic 2022


var cajadatos, bd;

//function iniciar() {
	cajadatos = document.getElementById("cajadatos");
	
	var boton =  document.getElementById("grabar");
	boton.addEventListener("click",() => console.log("Hola, en proceso de construcción. Disculpe las molestias.")   );
	
	var solicitud = indexedDB.open(basededatos);
	solicitud.addEventListener("error",mostrarError);
	solicitud.addEventListener("succes",comenzar);
	solicitud.addEventListener("upgradeneeded",crearbd);

//}
