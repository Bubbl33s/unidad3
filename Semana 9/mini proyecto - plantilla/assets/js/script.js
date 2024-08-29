// Mini proyecto
// Inicializamos nuestro arreglo con nombres de marcas de vehículos
const cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];

// Métodos de array
let btnPush = document.getElementById("btn-push");
// Asignamos la función al botón
btnPush.onclick = funcionPush;

function funcionPush() {
  // Actualizamos el array
  cars.push("lexus");
  // Cargamos las imágenes nuevamente
  mostrarImagenes();
}

// Esta funcion carga las imagenes en el elemento demo
function mostrarImagenes() {
  let text = "";

  for (let car of cars) {
    text += `<img src="./assets/img/${car}.png" alt="${car}" width="100" />`;
  }

  document.getElementById("demo").innerHTML = text;
}

// Mostramos las imágenes al inicio
mostrarImagenes();
