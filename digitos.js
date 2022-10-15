// 14/10/2022

function digitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí

   let texto = numero.toString();
   largo = texto.length;           // length es propiedad no lleva () no es metodo.
   if (largo === 3) return largo; else return largo;
}

//....................

nro = 666
console.log('El nro ' + nro + ' tiene ' + digitos(nro) + ' dígitos.');

nro = 65732
console.log('El nro ' + nro + ' tiene ' + digitos(nro) + ' dígitos.');

nro = ''
console.log('El nro ' + nro + ' tiene ' + digitos(nro) + ' dígitos.');

