function calcular(){
    var error = false;//Esto es una bandera
    var nombre = document.getElementById("nombre").value;//Nombre del ciente
    var dni = document.getElementById("dni").value;//Nº de documento de identidad del cliente
    var nacimiento = Number(document.getElementById("nacimiento").value);//Año de nacimiento del cliente
    var hoy = new Date();
    var actual = hoy.getFullYear();//Año actual
    var edad = actual-nacimiento;//Edad del cliente
    var telefono = document.getElementById("telefono").value;//Nº de teléfono del cliente
    var email = document.getElementById("email").value;//Email del cliente
    var telef = document.getElementById("telef").checked;//Preferencia de contacto
    var mail = document.getElementById("mail").checked;//Preferencia de contacto
    var correo = document.getElementById("correo").checked;//Preferencia de contacto
    var html = document.getElementById("html").checked;//Curso de HTML 5
    var css = document.getElementById("css").checked;//Curso de CSS3 
    var introjava = document.getElementById("introjava").checked;//Curso de introducción a JavaScript
    var avanjava = document.getElementById("avanjava").checked;//Curso de JavaScript avanzado
    var bootstrap = document.getElementById("bootstrap").checked;//Curso de Bootstrap
    var jquery = document.getElementById("jquery").checked;//Curso de jQuery
    var angular = document.getElementById("angular").checked;//Curso de Angular 5 
    var total = 0;//Importe acumulado del pedido
    var contrato = document.getElementById("contrato");

    if (nombre.trim()==""){
        alert ("Introduzca el nombre");
		error = true;
    }
    if (edad<18){
        alert ("Usted debe ser mayor de edad");
        error = true;
    }
    if ((telef==false) && (mail==false) && (correo==false)){
        alert ("Debe seleccionar su preferencia de contacto");
        error = true;
    }
    if (html==true){
        total = total + 300;
    } 
    if (css==true){
        total = total + 200;
    }
    if (introjava==true){
        total = total + 500;
    }
    if (avanjava==true){
        total = total + 400;
    }
    if (bootstrap==true){
        total = total + 200;
    }
    if (jquery==true){
        total = total + 300;
    }
    if (angular==true){
        total = total + 800;
    } 
    if (total== 0){
        alert("Debe seleccionar por lo menos un curso");
        error = true;
    }
    if (error==false){
        contrato.style.color = "black";
        contrato.innerHTML="El usuario " + nombre + " ha contratado cursos por el valor de " + total + "€.";
	} else {
        contrato.style.color = "red";
    
		contrato.innerHTML = ("Hay un error en el formulario");
	}
}