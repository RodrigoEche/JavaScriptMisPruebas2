//<!-- Copyrigth:  https://github.com/luciaradwanski/Ejercicio-N-11/blob/main/index.html   -->
/*Ejecicio 1*/
let diaSemana = prompt("¿Qué día es hoy?");
let ejercicio = "Lunes";
switch (diaSemana) {
    case "lunes":
        alert("Hoy es lunes.");
        alert("Caminata de 5 km");
        break;
    case "martes":
        alert("Hoy es martes.");
        alert("Caminata de 10 km");
        break;
    case "miércoles":
        alert("Hoy es miércoles.");
        alert("Correr 5 km");
        break;
    case "jueves":
        alert("Hoy es jueves.");
        alert("Correr 10 km");
        break;
    case "viernes":
        alert("Hoy es viernes.");
        alert("Hacer 20 multisaltos horizontales");
        break;
    case "sábado":
        alert("Hoy es sábado.");
        alert("Hacer 40 zancadas laterales en banco");
        break;
    case "domingo":
        alert("Hoy es domingo.");
        alert("Hacer 40 desplantes con recuperación de rodilla arriba");
        break;
    default:
        console.log("Descanso");
}

/*Ejecicio 2*/

for(i=20;i<=30;i++){
    document.write("El número es: " + i + "<br>");
}

/*Ejecicio 3*/

cantidad = prompt("Determine cuántas veces desea emitir el saludo")
for(i=0;i<cantidad;i++){
    document.write("Hola Mundo" + i + "<br>");
}