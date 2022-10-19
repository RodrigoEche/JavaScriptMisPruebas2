function promediarArray(array){
    // Programa en relacion a Homework JSIII:
    // No pude resolver el porque considera JS distinta un arreglo declarado en estas dos formas
    // arreglo1 = [1,2,3,4] o arreglo2 = [[1],[2],[3],[4]]
    // el arreglo2 seria mas general en caso de que me pasen un tabla bidimensional 
    // y resolver para ese caso deberia resolver para arreglo1
    // me falla al hacerle length a arreglo1 pero no a arreglo2.

    largo = array.length;
    nuevoArray = [];
    for (i = 0; i < largo; i++) nuevoArray[i]= array[i]; 
    //reasigno tratando de forzar la forma [[1],[2],[3],[4]]

    r = nuevoArray.length;
    c = nuevoArray[0].length;   
    console.log('Arreglo formateado dentro de la función: ');
    console.log('renglones: ' + r );
    console.log('columnas: ' + c );
} // fin de funcion
//......................

arreglo1 =   [  1,
                3,
                6 ];

arreglo2 =   [  [5],
                [7],
                [8]]; 

arreglo3 =  [   [2,3],
                [4,6],
                [10,4]] ;

console.log('    '); console.log('Arreglo pasado a la función: ');
console.log('arreglo.length: '+ arreglo3.length)
console.log('arreglo[0].length: '+ arreglo3[0].length)
console.log('valor de arreglo_[1][1] ->  '+ arreglo3[1][1])
console.log('    ');
promediarArray( arreglo3 );


