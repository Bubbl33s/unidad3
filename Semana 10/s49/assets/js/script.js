$(document).ready(function () {
  // Sintaxis de jQuery -> $(selector).accion();
  // Con JS
  document.querySelector("#title").innerHTML = "DOM con JS";
  // Con jQuery
  $("#title").html("DOM con jQuery");

  // Seleccionar por clase
  $(".demo").html("Clase seleccionada");
  // Solo usar el primero de una clase
  $(".demo").first().html("Primer elemento de la clase");

  // Seleccionar elemento y cambiar un atributo
  // .attr("atributo", "valor")
  $("img").attr(
    "src",
    "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg"
  );

  $("img").attr("title", "Un koala");

  // Evento de click
  // $("#btn").click(() => $("#resultado").toggle());
  $("#btn").click(function () {
    $("#resultado").toggle();
  });
});
