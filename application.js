$(document).ready(function() {
  // Este código corre después de que `document` fue cargado(loaded) 
  // completamente. 
  // Esto garantiza que si amarramos(bind) una función a un elemento 
  // de HTML este exista ya en la página. 
  $("form").on("submit", function(event){
  	event.preventDefault();
    $("#mens").html("");
  	
  	var email = $("input[name=email]").val();
  	var password = $("input[name=password").val();
    var VALID_EMAIL = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var VALID_PASSWORD = /\d+/;
    var VALID_UPPERCASE = /[A-Z]/
    var VALID_LONG = password.lenght > 8;
    if (!VALID_EMAIL.test(email)){
      $("#mens").append("<li> debes ingresar una direccion de email valida </li>");
       ;
    }
    if (!VALID_PASSWORD.test(password)){
      $("#mens").append("<li> El password debe tener al menos un caracter numerico </li>");

    }
    if (!VALID_UPPERCASE.test(password)){
      $("#mens").append("<li> El password debe contener al menos una mayuscula");
    }
    if (VALID_LONG){
      $("#mens").append("<li> El password debe tener al menos 8 caracteres");
    }
    
  });
});
