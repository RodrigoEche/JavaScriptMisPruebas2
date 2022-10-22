// Practica de objetos



const usuario= {
	nombre: 	'',
	apellido: 	'',
	email:		'',
	password:	'',		
	mostrarNombre:	function() {console.log('Te muestro el nombre: ' + this.nombre);} ,
	saludar:	function() {console.log('Hola '+ this.nombre +'!');}
	};

console.log('');
	//declara objeto
	var nuevoUsuario= usuario;

	//setea propiedades
	nuevoUsuario.nombre='Rodrigo';
	nuevoUsuario['apellido']='Eche' 
			//ojo si asignas a 'Apellido' en lugar de 'apellido' crea una propiedad nueva

	//usa sus metodos
	nuevoUsuario.saludar();
	nuevoUsuario.mostrarNombre();

	
	//recorre pares clave:valor
console.log('');
	for ( let clave in nuevoUsuario) {
		console.log(clave + ': ' + nuevoUsuario[clave]);
	};