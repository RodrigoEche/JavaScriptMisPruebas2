// BASE DE DATOS INDEXADAS Sacado de "El gran libro de HTML5, CSS3 y JavaScript". Marcombo 2017 pag 485  
// Rodrigo 6 Dic 2022


var cajadatos, bd;

function iniciar() {
	cajadatos = document.getElementById("cajadatos");
	
	var boton =  document.getElementById("grabar");
	boton.addEventListener("click",() => console.log("Hola, en proceso de construcción. Disculpe las molestias.")   );
	
	//.open() abre o intenta abrir la BD y devuelve el objeto "solicitud" que desencadena uno de los tres eventos posibles "error" "succes" u "upgradeneeded"
	//el evento upgradeneeded se llama si no existe aúnla base de datos 
	var solicitud = indexedDB.open(basededatos);
	solicitud.addEventListener("error",mostrarError);
	solicitud.addEventListener("succes",comenzar);
	solicitud.addEventListener("upgradeneeded",crearbd);
}


function mostrarError(evento){    alert(" Ocurrió un error de código: " + evento.code + " " + evento.message);    }

function comenzar(evento){ 
	// se captura de una referencia a la base de datos mediante la prop.
	// .result y se almacena en la variable global bd para uso posterior 
	bd = evento.target.result;
}