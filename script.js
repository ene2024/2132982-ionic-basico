var mivariable = 5;
var campoTexto = document.getElementById("miTxt");
var texto = "";


function miFuncion(){
    texto = campoTexto.value;
    alert(texto);
}

function borrar(){
    campoTexto.value = "";
}


miFuncion();

