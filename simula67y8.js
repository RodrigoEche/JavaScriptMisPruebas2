/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClasePersona() {
    class Persona {
      constructor(nombre, edad, hobbies, amigos) {
        // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
        // Inicializar las propiedades de la persona con los valores recibidos como argumento  
        // Tu código aca:
            this.nombre     = nombre;
            this.edad       = edad;
            this.hobbies    = hobbies;
            this.amigos     = amigos; //PERFECTO ANDA
      }
  
      addFriend(nombre, edad) {
        // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
        // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
        // No debe retornar nada.  
        // Tu código aca:
        
        //this.amigos.nombre      = nombre;
        //this.amigos.edad        = edad; 

        this.amigos.push({'nombre': nombre, 'edad': edad}); //PERFECTO ANDA
  
      }
  
      addHobby(hobby) {
        // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de la persona.
        // No debe retornar nada.
  
        // Tu código aca:
        this.hobbies.push(hobby); //PERFECTO ANDA x
      }
      getFriends() {
        // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
        // de la persona.
        // Ej:
        // Suponiendo que la persona tiene estos amigos: [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]
        // persona.getFriends() debería devolver ['martin', 'toni']  
        // Tu código aca:
        var arrayDestino  = [];
        var arrayOrigen  = [];

        //array de objetos amigos
        arrayOrigen = this.amigos;
        //array de cadenas nombres de amigos
        arrayDestino = arrayOrigen.map( elemento => {return elemento.nombre});
        return arrayDestino;
      }

      getHobbies() {
        // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
        // Ej:
        // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']
  
        // Tu código aca:
  
        var arrayDestino  = [];
        var arrayOrigen  = [];

        //array de cadenas hobbies
        arrayOrigen = this.hobbies;
     
        arrayDestino = arrayOrigen;  //.map( elemento => {return elemento.nombre});
        return arrayDestino;
      }
  
      getPromedioEdad() {
        // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
        // Ej:
        // Si la persona tuviera estos amigos:
        // {
        //   amigos: [{
        //     nombre: 'toni',
        //     edad: 33,
        //   }, {
        //     nombre: 'Emi',
        //     edad: 25
        //   }]
        // }
        // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29
  
        // Tu código aca:
        
        var arrayDestino  = [];
        var arrayOrigen  = [];

        //array de objetos amigos
        arrayOrigen = this.amigos;

        //array de enteros de edades de amigos
        arrayDestino = arrayOrigen.map( elemento => {return elemento.edad});

        //suma de edades
        const suma = arrayDestino.reduce( (acc,elem) => { return acc + elem;} , 0);

        // total de amigos
        const totalAmigos = arrayDestino.length;

        const promedioEdades = suma / totalAmigos;
        return promedioEdades;
      }
    };
  
    return Persona;
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////
  const Persona = crearClasePersona();
  const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 10}]);
  persona.addFriend('Leonardo', 20);
  persona.addFriend('Pepe',30)
  persona.addHobby('ajedrez');
 
  console.log('............................................................');
  console.log('Análisis de datos de ' + persona.nombre + '--> ' + persona) ;
  console.log(persona) ;
  console.log('............................................................');

  console.log( 'Amigos de ' + persona.nombre + '--> ' + persona.getFriends());
  console.log('Hobbies de ' + persona.nombre + '--> ' +persona.getHobbies());
  console.log('Edad promedio de los amigos de ' + persona.nombre + '--> ' +persona.getPromedioEdad());

/////////////////////////////////////////////////////////////////////////////////////////////////////
