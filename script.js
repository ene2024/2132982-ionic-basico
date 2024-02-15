var botonL = document.getElementById("button-login");
var inputL = document.getElementById("input-user");
var botonR = document.getElementById("button-register");


botonL.addEventListener('click', function(){
  var user = inputL.value;
  alert("Login correcto " + user);
});

botonR.addEventListener('click', function(){
  var user = inputL.value;
  alert("Registro con exito " + user);
});
