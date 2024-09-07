$(document).ready(function () {
  const data = JSON.parse(localStorage.getItem("pokemon-data"));
  console.log(data);

  // Mi función para mostrar los pokemones
  let pokeCard = $("<div></div>").addClass("pokemon-card");
  // Nombre y numero del pokemon
  let name = $(`<h3">data.name</h3>`).text(data.name.toUpperCase());
  name.addClass("pokemon-name");
  let num = $("<p></p>").text(`#${data.order}`);

  let nameContainer = $("<div></div>").addClass("name-container");
  nameContainer.append(name, num);

  // Imagen del pokemon
  let img = $("<img />").attr(
    "src",
    data.sprites.other["official-artwork"].front_default
  );

  let tipos = $("<div></div>").addClass("tipos");
  let tiposData = data.types;

  for (let tipo of tiposData) {
    let tipoElement = $("<p></p>").text(tipo.type.name.toUpperCase());
    tipoElement.addClass(tipo.type.name);
    tipos.append(tipoElement);
  }

  // Agregamos los elementos a la card
  pokeCard.append(nameContainer, img, tipos);
  // Agregamos la card al contenedor
  $("#pokemon-container").append(pokeCard);
});
