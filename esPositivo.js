function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    if (numero > 0) 
    {return "Es positivo"} 
    else if (numero < 0) {return "Es negativo" } 
    else {return false}
  }

  numero = -3
  console.log(numero)
  console.log(esPositivo(numero))