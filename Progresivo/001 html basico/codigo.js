// JS asociado a html

alert("js externo");

	
	
		var colorcito = "#5DBB95"; //https://es.stackoverflow.com/questions/438403/cambiar-colores-del-input-con-js
		var colorcite = "#BBA65D";
		
		//manejo de eventos
		// ver link de abajo...
		//https://developer.mozilla.org/es/docs/Web/API/HTMLElement/input_event#ejemplos
		//fin de manejo de eventos 
		
		function CalcularIMC() {
			peso = document.getElementById("peso").value;
			altura = document.getElementById("altura").value;
				altura_metros = altura / 100;
				altura_cuadrado=altura_metros*altura_metros;
			
				valorIMC = Math.round(peso *10 / altura_cuadrado)/10;
				
				if (valorIMC > 0) {color = "blue"; clasificación = "Bajo peso";}
				if (valorIMC > 18.5) {color = "green"; clasificación = "Peso promedio";}
				if (valorIMC > 25) {color = "orange"; clasificación = "Sobrepeso";}
				if (valorIMC > 30) {color = "red"; clasificación = "Obesidad grado I";}
				if (valorIMC > 35) {color = "magenta"; clasificación = "Obesidad grado II";}
				if (valorIMC > 40) {color = "violet"; clasificación = "Obesidad grado III";}
				clasificación.bold(); //http://www.w3big.com/try/try.php?filename=tryjsref_str_style				
					
			//document.getElementById("mensaje").style.backgroundColor = color;		
	
			msgExtra1 = clasificación + " (IMC = " + peso + " / " + altura_metros + "^2 = " + valorIMC + " )";
			msgExtra2 = clasificación ;
			msgExtra3 = " Indice = " + valorIMC + " ( " + peso + " / " + altura_metros + " ^ 2" +  " )";

			//document.getElementById("mensaje").value=  msgExtra2;			
			document.getElementById("imc").value = msgExtra3 + " ---- " + msgExtra2 + " ---- ";
			
			document.getElementById("imc").style.backgroundColor =color;
			document.getElementById("divImag").style.backgroundColor =color;
			document.getElementById("peso").style.backgroundColor =color;
			document.getElementById("altura").style.backgroundColor =color;
			document.body.style.backgroundColor='white'; 
			document.getElementById("titulo").style.backgroundColor = document.body.style.backgroundColor;
			document.getElementById("fondo").style.backgroundColor = document.body.style.backgroundColor;		
			
		}
	
	
	
	//AGREGA ESCUCHADORA A EVENTO 'click' DEL BOTON COLOR PARA BOLUDEAR
	//Fuente: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#its_not_just_web_pages 
	//const botonColor = document.getElementById("botonColor"); FUNCIONA
	const botonColor = document.querySelector("#botonColor"); //FUNCIONA 
	const tituloH1 = document.getElementById("tituloH1");
	
	function random(numero) {
		return Math.floor(Math.random() * numero + 1);  
	};
	
	botonColor.addEventListener('click',() => { 
															//const randomColor = "rgba(240 180 12 / 60%)"; 
			const randomColor1 = "rgba("+ random(255) +" " + random(255) + " "+ random(255) + " / "+ random(100) +"%)"; 			
			const randomColor2 = "rgba("+ random(255) +" " + random(255) + " "+ random(255) + " / "+ random(100) +"%)";
			document.body.style.backgroundColor = randomColor1;
			tituloH1.style.color = randomColor2;	
			fondo.style.backgroundColor=randomColor1;	
			//titulo.style.backgroundColor=randomColor2;			
			
	}  );	

	
	
	//AGREGA ESCUCHADORA A EVENTO 'click' DE LOS DIV COLOR PARA BOLUDEAR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	const fondo = document.getElementById("fondo"); 
	const blanco = document.querySelector("#titulo"); 	
	
	function random(numero) {
		return Math.floor(Math.random() * numero + 1); 
	};
	
	fondo.addEventListener('click',() => { 			
			const randomColor1 = "rgba("+ random(255) +" " + random(255) + " "+ random(255) + " / "+ random(100) +"%)"; 
			document.body.style.backgroundColor = randomColor1;		
			fondo.style.backgroundColor=randomColor1;
	}  );	
	
	titulo.addEventListener('click',() => { 						
			const randomColor2 = "rgba("+ random(255) +" " + random(255) + " "+ random(255) + " / "+ random(100) +"%)";
			tituloH1.style.color = randomColor2;	
			titulo.style.backgroundColor=randomColor2;
	}  );		

	
	

	//AGREGA ESCUCHADORA A EVENTO TECLA ENTER PRESIONADA EN CAJAS DE TEXTO DE PESO Y ALTURA 
	peso = document.getElementById("peso");
	altura = document.getElementById("altura");
			
	//peso.addEventListener('keydown',  e=>{   if (e.keyCode==13) { CalcularIMC(); document.body.style.backgroundColor='white';	};   })	
	//altura.addEventListener('keydown',e=>{   if (e.keyCode==13) { CalcularIMC(); document.body.style.backgroundColor='white';  };   })
	peso.addEventListener('change',  e=>{  { CalcularIMC(); document.body.style.backgroundColor='white';	};   })	
	altura.addEventListener('change',e=>{   { CalcularIMC(); document.body.style.backgroundColor='white';   };   })
	button.addEventListener('click', () => {   CalcularIMC();document.body.style.backgroundColor='white';   })
	

	
	