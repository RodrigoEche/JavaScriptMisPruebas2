/* Pruebas relacionadas a CallBacks y metodos de orden superior de arrays
*/

function hola(persona)  { console.log('Hola '+ persona + '!!!'); }
function chau(persona)  { console.log('Hasta la vista '+ persona + '!'); }

//saludarA() es la función "manejadora" de callbacks
function saludarA(persona,nombreFuncionCB){     return nombreFuncionCB(persona);  }

//Pepito hizo login
saludarA('Pepito', hola); //hola es una funcion, el nombre de la funcion CB --> invocada sin argumentos

//Pepito hizo logout
saludarA('Pepito',chau)  // idem hola
//....................................................................................
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

const autos = ['Ford', 'Chevrolet','Volkswagen','Audi'];

console.log(' ');
console.log( autos );

console.log("USANDO CALLBACK FUNCTIONS DENTRO DEL forEach(): solo valores del array")
function mostrarListaFormato1(elemento,indice) {  console.log(elemento);   }
autos.forEach(mostrarListaFormato1); 
//OJO: la función CB dentro del .forEach debe diseñarse según que permite el forEach 
// consultar el help para ese método de orden superior.

console.log("USANDO CALLBACK FUNCTIONS DENTRO DEL forEach(): índices y valores del array")
function mostrarListaFormato2(elemento,indice) {  console.log(indice + ': '+ elemento);   }
autos.forEach(mostrarListaFormato2);

console.log("USANDO CALLBACK FUNCTIONS DENTRO DEL forEach(): solo índices")
function mostrarListaFormato3(elemento,indice) {  console.log(indice + ': ');   }
autos.forEach(mostrarListaFormato3);

console.log("USANDO ARROW FUNCTIONS DENTRO DEL forEach() solo valores")
autos.forEach( (elemento,indice) => {  console.log(elemento);   } );

console.log("USANDO ARROW FUNCTIONS DENTRO DEL forEach() indices y valores")
autos.forEach( (elemento,indice) => {  console.log(indice + ': '+ elemento);   } );

console.log("USANDO ARROW FUNCTIONS DENTRO DEL forEach() solo indices")
autos.forEach( (elemento,indice) => {  console.log(indice + ': ');   } );

console.log("USANDO INLINE FUNCTIONS DENTRO DEL forEach() solo valores")
autos.forEach( function (elemento,indice) {  console.log(elemento);   } );

console.log("USANDO INLINE FUNCTIONS DENTRO DEL forEach() indices y valores")
autos.forEach( function (elemento,indice) {  console.log(indice + ': '+ elemento);   } );
console.log("USANDO INLINE FUNCTIONS DENTRO DEL forEach() indices y valores con caracteres de escape y comillas `  ` ")
autos.forEach( function (elemento,indice) {  console.log(`a[${indice}] = ${elemento}`);   } );

console.log("USANDO INLINE FUNCTIONS DENTRO DEL forEach() solo indices")
autos.forEach( function (elemento,indice) {  console.log(indice + ': ');   } );

console.log("REVIRTIENDO ARRAY Y USANDO INLINE FUNCTIONS DENTRO DEL forEach() indices y valores")
largo = autos.length; var sotua = [];
autos.forEach( (elemento,indice) => { sotua.unshift(elemento) });

console.log("Autos ");
autos.forEach( function (elemento,indice) {  console.log(indice + ': '+ elemento);   } );

console.log("Autos ---> Sotua");
sotua.forEach( function (elemento,indice) {  console.log(indice + ': '+ elemento);   } );