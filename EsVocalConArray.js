//..............................................................

function esVocal(letra){
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    // Si no es vocal, tambien debe devolver "Dato incorrecto".
    //Escribe tu código aquí
    msg = "Dato incorrecto";
    long = letra.length;
    letra= letra.toLowerCase();
    vocales = ['a' ,'e', 'i', 'o' ,'u'];
  
    if (long>1) {}  
    else {
            for (var i = 0; i < 5 ; i++) { 
                console.log( i + ' ' +  vocales[i] ); //muestra codigo asignado a cada vocal 
              if (letra == vocales[i]){msg= "Es vocal";}              
            }
    }
    console.log('Dato ingresado: ' + letra + ' ----> ' + msg);
    return msg;
  }
//..............................................................
letra='b';
esVocal(letra);  // llamada a la funcion

letra='a';
esVocal(letra); 
//..............................................................



