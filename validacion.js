function validar_formulario() {
    var username = document.formRegistro.username;
    var email = document.formRegistro.correo;
    var password = document.formRegistro.password;
  
    var username_len = username.value.length;
    if (username_len == 0 || username_len < 8) {
      alert("Debes ingresar un username con min. 8 caracteres");
      return false; //Para que los datos se conserven
      
    }
  
    var formato_email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (!email.value.match(formato_email)) {
      alert("Debes ingresar un email electronico valido!");
      return false; //Para que los datos se conserven
      
    }
  
    var passid_len = password.value.length;
    if (passid_len == 0 || passid_len < 8) {
      alert("Debes ingresar una password con mas de 8 caracteres");
      return false; //Para que los datos se conserven
    }
  }

function mostrarPassword(){
    var objeto = document.getElementById("password");
    objeto.type = "text";
}

function ocultarPassword(){
    var obj = document.getElementById("password");
    obj.type = "password";
}

function showForm(){
    document.getElementById("formRegistro").style.display = "block";
}

function hideForm(){
    document.getElementById("formRegistro").style.display = "none";
}