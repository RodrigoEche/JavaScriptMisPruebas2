
function Gato(nombre){   //definir clase Gato como una función constructora con argumentos
    this.nombre = nombre;  //propiedad de la clase
    this.maullar = function() { return 'Mi nombre es ' + this.nombre + '. Miaaaauu!';} //método de la clase
}

//los métodos van en la propiedad prototype de la clase
Gato.prototype.describir = function() 
{return 'Este gato se llama ' + this.nombre + '. Es de color ... bla bla bla'};




//..................................................................................
//objeto instanciado de la clase (en lugar de creado literalmente con llaves etc)
var amada = new Gato('Amada');
var michin = new Gato('Michín');
var luna = new Gato('Luna');
var otro = Object.create(amada );

//invocación del método
console.log(amada.maullar());
console.log(michin.maullar());
console.log(luna.maullar());
console.log(luna.describir());

console.log(otro.maullar());
console.log(otro.describir());

//console.log(amada.__proto__);
//console.log(luna.__proto__);

var cadena ='prueba de cadena';
var objeto1 = {};
//console.log(objeto1.__proto__);

//....................................... NO ME FUNCIONABA EL SETEO DE NOMBRE Y APELLIDO 
// PORQUE HABIA PUESTO nombre = this.nombre en lugar de this.nombre = nombre
class Persona { 
    constructor(nombre,apellido) {
        this.nombre = nombre;          
        this.apellido=apellido;
    } 

    getNombre() {return this.nombre;} 
    getApellido() {return this.apellido;}
    mostrar() {console.log(this.nombre + ' ' + this.apellido);}
}

var esteban = new Persona ('Esteban', 'Eche');
console.log(esteban.getNombre());
esteban.mostrar();
//..................................................................................  

function Persona2(nombre, apellido) {
    this.nombre = nombre || 'poner nombre';      //OJO NO OLVIDAR ESTE THIS
    this.apellido= apellido || 'poner apellido';
}

Persona2.prototype.getNombre = function() {  return this.nombre; };
Persona2.prototype.getApellido = function() {return this.apellido; };
Persona2.prototype.mostrar = function() {console.log( this.nombre + ' ' + this.apellido) }; 

var rodrigo = new Persona2("Rodri","Echego");
//var rodrigo = new Persona2()

rodrigo.getNombre();
rodrigo.mostrar();
console.log(rodrigo.getNombre())

console.log(rodrigo.__proto__)
for (let clave in rodrigo) {     console.log(clave + ': ' + rodrigo[clave]);    }