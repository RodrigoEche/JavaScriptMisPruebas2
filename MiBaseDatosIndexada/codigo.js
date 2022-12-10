// BASE DE DATOS INDEXADAS Sacado de "El gran libro de HTML5, CSS3 y JavaScript". Marcombo 2017 pag 485  
// Rodrigo 6 Dic 2022
var cajadatos, bd;
boton.addEventListener("click",   function() {alert("En construcción. Disculpe las molestias2.")}   );

function iniciar() {
	cajadatos = document.getElementById("cajadatos");	
	boton =  document.getElementById("grabar");
	boton.addEventListener("click", agregarObjeto   );
	
	//.open() abre o intenta abrir la BD y devuelve el objeto "solicitud" que desencadena uno de los tres eventos posibles "error" "succes" u "upgradeneeded"
	//el evento upgradeneeded se llama si no existe aúnla base de datos 
	var solicitud = indexedDB.open(basededatos);
	solicitud.addEventListener("error",mostrarerror);		//1
	solicitud.addEventListener("succes",comenzar);			//2
	solicitud.addEventListener("upgradeneeded",crearbd);	//3
}
//las funciones 1, 2 y 3 que responden a estos eventos reciben un objeto IDBRequest,
// cuyas propiedades tienen información acerca de la operación: result, error, readyState etc

//1
function mostrarerror(evento){    
	alert(" Ocurrió un error de código: " + evento.code + " " + evento.message);    
}

//2
function comenzar(evento){ 
	// se captura de una referencia a la base de datos mediante la prop. result y 
	// se almacena en la variable global bd para uso posterior 
	bd = evento.target.result;
}

//3
function crearbd(evento){
	//se lee la referencia a la base de datos
	var basededatos = evento.target.result;
	//se crea un almacen/Store de objetos que se accederá con el id
	var almacen = basededatos.createObjectStore("peliculasAlmacen", { keyPath: "id" });
	//se crea un segundo id para ordenar por fechas
	//este 2do indice se identifica con el nombre BuscarFecha y se declara para la propiedad idFecha 
	almacen.createIndex("BuscarFecha", "idfecha", { unique: false });	
}

//4
function agregarObjeto(){
	var clave = document.getElementById("clave").value;
	var titulo = document.getElementById("titulo").value;
	var fecha = document.getElementById("fecha").value;

	var transaccion = bd.transaction(["peliculasAlmacen"], "readwrite");
	var almacen = transaccion.objectStore("peliculasAlmacen");
	transaccion.addEventListener("complete", function() { mostrar(clave); });

	var solicitud = almacen.add( { id: clave, nombre: titulo, fecha: fecha} );

	document.getElementById("clave").value = "";
	document.getElementById("titulo").value = "";
	document.getElementById("fecha").value = "";
}