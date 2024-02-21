var Article = document.getElementById("Article");
var Price = document.getElementById("Price");
var Button = document.getElementById("button-add");
var totalC = document.getElementById("precio");
var Articulo = document.getElementById("ArticleC");
var totalContainer = document.getElementById("total-container");
var total = 0.0;

document.addEventListener('DOMContentLoaded', function() {
  Button.addEventListener('click', function(){
    var precio = parseFloat(Price.value);
    var articulo = Article.value;
    total = total + precio;
    console.log(total);

    var newItem = document.createElement("div");
    newItem.innerHTML = "Artículo: <span>" + articulo+ "</span> Precio: <span>" + precio + "</span>";

    totalContainer.appendChild(newItem);

    var totalElement = document.createElement("div");
    totalElement.textContent = "Total: $" + total.toFixed(2); // Mostrar el total hasta 2 decimales
    
    // Agregar el nuevo elemento del total al contenedor total-container
    totalContainer.appendChild(totalElement);

    Price.value = "";
    Article.value = "";
  });
});



