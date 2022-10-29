function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto.property = 'Null';
  return objeto;

}

  //......................
  var gato = {
    nombre: 'Michin',
    edad: 2,
    mostrar: function() {console.log('\n Nombre del gato: ' + this.nombre + ' \n\t Edad: '+ this.edad) + ' años'}
  }

  gato.mostrar()


  //agregarPropiedad(gato,'raza')