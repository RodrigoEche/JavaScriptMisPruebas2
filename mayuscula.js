function mayuscula(nombre) {
    //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
    //ej: Recibe "mario" ----> Devuelve "Mario"
    //Tu código:
    
    primer = nombre[0];
    inicial = String(primer).toUpperCase();
    recortada = String(nombre).substring(1);

    return  recortada;     
  }


  //BORRAR LO DE ABAJO
  var minusculas = 'ariel'
  console.log(minusculas + " ---> " + mayuscula(minusculas));
  console.log("Hola....")