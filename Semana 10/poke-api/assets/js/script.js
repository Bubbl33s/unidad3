// * https://pokeapi.co/api/v2/pokemon/id -> Poke API

function getPokemon(id) {
  $.get(`https://pokeapi.co/api/v2/pokemon/${id}`, function (data) {
    // Mi función para mostrar los pokemones
    let pokeCard = $("<div></div>").addClass("pokemon-card");
    // Nombre y numero del pokemon
    let name = $(`<a href="./detalles.html" id="${id}"></a`).text(
      data.name.toUpperCase()
    );
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
    console.log(tiposData);

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
}

// EVENTO DEL CLICK PARA CADA POKEMON
// Delegacion de eventos para elementos creados dinamicamente
$(document).on("click", ".pokemon-name", function (e) {
  console.log(e.target.id);

  $.get(`https://pokeapi.co/api/v2/pokemon/${e.target.id}`, function (data) {
    // GUARDAMOS TODA LA DATA DEL POKEMON EN EL LOCALSTORAGE
    localStorage.setItem("pokemon-data", JSON.stringify(data));
  });
});

$(document).ready(function () {
  // Acá escribo mi código
  for (let i = 1; i <= 150; i++) {
    getPokemon(i);
  }
});
