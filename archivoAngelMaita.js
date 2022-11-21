function imprimirSumaNumeros(){
// imprimir equivale a usar console.log(algo)
//del 1 al 10 equivale a usar un for

/* let acumulador = 0;
for (let i = 1; i <= 10; i++) { acumulador = acumulador + i;  }
//console.log(acumulador);    
return acumulador;
*/

let numbers = [1,2,3,4,5,6,7,8,9,10];
let suma = 0;
for (let i = 0; i < numbers.length; i++) {  suma = suma + numbers[i];   } 
//me gusta poner en una linea todo el for(){} cuando es una sola instruccion
//console.log( suma );
return suma;
}


console.log(imprimirSumaNumeros());