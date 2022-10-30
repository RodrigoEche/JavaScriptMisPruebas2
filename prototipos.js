//..................................................................................  
// el uso de Prototipado es lo que prefiere Toni
function Persona2(nombre, apellido) {
    this.nombre = nombre || 'poner nombre';   
    this.apellido= apellido || 'poner apellido';
}
//ésto es el prototipado de los métodos que tendrán los objetos instanciados
Persona2.prototype.getNombre = function() {  return this.nombre; };
Persona2.prototype.getApellido = function() {return this.apellido; };
Persona2.prototype.mostrar = function() {console.log( this.nombre + ' ' + this.apellido) }; 

var rodrigo = new Persona2("Rodri","Echego");
var daniel = rodrigo;

rodrigo.mostrar();
console.log(rodrigo.getNombre());

//objeto rodrigo = new Persona2
console.log('\nObjeto: ' + 'rodrigo')
console.log('\nPares propiedad:valor del objeto')
for (let clave     in rodrigo) {     console.log(clave + ': ' + rodrigo[clave]);    };
console.log('\nPropiedad__proto__ del objeto ' );
for (let clave in rodrigo.__proto__) {     console.log(clave + ': ' + rodrigo.__proto__[clave]);    };

//objeto daniel = rodrigo
console.log('\nObjeto: ' + 'daniel')
console.log('\nPares propiedad:valor del objeto')
for (let clave     in daniel) {     console.log(clave + ': ' + daniel[clave]);    };
console.log('\nPropiedad__proto__ del objeto ' );
for (let clave in daniel.__proto__) {     console.log(clave + ': ' + daniel.__proto__[clave]);    };