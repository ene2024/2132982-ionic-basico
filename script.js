var Article = document.getElementById("Article");
var Price = document.getElementById("Price");
var Button = document.getElementById("button-add");
var totalContainer = document.getElementById("total-container");
var totalPrice = document.getElementById("total-price");
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

    totalPrice.textContent = "Total: $" + total.toFixed(2); // Mostrar el total hasta 2 decimales

    // Agregar el nuevo elemento del total al contenedor total-container
    totalPrice.appendChild(totalElement);

    Price.value = "";
    Article.value = "";
  });
});



