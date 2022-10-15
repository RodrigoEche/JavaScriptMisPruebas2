// archivo que maneja ARRAY con bucle FOR e IF
// para ejecutar desde la terminal> node devolverArray.js
// RE 14/Oct/2022 (creado como .js editado con Notepad)
// Video JSII de soyHenry.com Ejercicio Tabla del 6.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

function devolverArray(){    
  let  array=[];
  for (i = 0;  i < 1000; i++ ) {
    if ( ( i*6 ) <= 60 ) { array.push( i*6 ); console.log(i*6);} else break;
  }
  return array;
}

//.............................

devolverArray();