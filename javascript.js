/*function holaMundo() {
	alert('Hola Mundo!');
}
window.onload = function() {
	document.querySelector("#cuadro").addEventListener("click", holaMundo);
	var n = window.prompt("Numero");
	alert(n);
};*/
	
/*function fibonacci() {
	
	var variable1 = 1, variable2 = 1, pos = 1;
	var num = parseInt(document.getElementById("numero").value);
		
	while(num > variable1 && num > variable2) {
		
		if(variable1 < variable2) {
			variable1 = variable1 + variable2;
		}
		else {
			variable2 = variable1 + variable2;
		}
			pos++;
	}
	if(num == variable1 || num == variable2) {
		alert("El numero " + num + " pertenece a la sucesion y se encuentra en la posicion " + (pos + 1));
	}
	else {
		alert("El numero " + num + " no pertenece a la sucesion Fibonacci");
	}
} */

//1,1,2,3,5,8,13,21,34

var a,b,resultado;
a = 0;
b = 1;
resultado = b;
for(var i = 1 ; i < 50 ; i++)
{
	document.write(resultado+"<br/>");
	resultado = a + b ;
	a = b ;
	b = resultado ;
}