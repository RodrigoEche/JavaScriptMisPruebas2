// Practica de objetos


const objeto1 = {}
const objeto2 = {
	nombre: 	'Raul',
	apellido: 	'Perez',
	email:		''
	};

console.log('\nEl nombre en objeto1 = {} es: '+ objeto1.nombre); // undefined


console.log('Accedo con . al nombre:\t\t\t\tobjeto2.nombre: '+ objeto2.nombre); // Raul

console.log('Accedo con [nombre con comillas] al nombre: \tobjeto2[nombre]: '+ objeto2['nombre']); // 