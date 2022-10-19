function tieneTresDigitos(numero){



let string = '${numero}';

if (string.length === 3) return 3; else return 0;


}

console.log('Valor devuelto: ' + tieneTresDigitos('hdo'));