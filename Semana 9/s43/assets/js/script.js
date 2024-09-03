// Modificación de arrays

// .map(función)
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

// 1 -> Dado el siguiente array de números, crear un nuevo array con cada uno de los números multiplicados por 2.
console.log(1);

let nums = [1, 2, 3, 4, 5];
console.log(nums);

// Con bucles
/*let numsPorDos = [];

for (let num of nums) {
  numsPorDos.push(num * 2);
}*/

// Usando map
let numsPorDos = nums.map((n) => n * 2);

console.log(numsPorDos);
// El arreglo original no se modifica
console.log(nums);

// 2 -> Dado el siguiente array de strings, crear un array indicando que elementos están en mayuscula (true) y cuales en minuscula (false)
console.log(2);

let letras = ["a", "B", "c", "D", "e"]; // [false, true, false, true, false]

let sonMayusculas = letras.map((c) => c.toUpperCase() == c);

/*
let sonMayusculas = letras.map((c) => {
  // Aca pongo mas lineas
  return c.toUpperCase() == c;
});
*/

console.log(sonMayusculas);

// 3 -> Del arreglo de strings, crear un nuevo arreglo con la siguiente pauta: Si la palabra tiene más de 7 letras se pondrá "palabra larga", en caso contrario se pondrá "palabra corta"
console.log(3);

let palabras = [
  "hola",
  "computadora",
  "casa",
  "programación",
  "javascript",
  "ciclo",
];

// ["palabra corta", "palabra larga", "palabra corta", "palabra larga", "palabra larga", "palabra corta"]

/*
let palabrasSize = palabras.map((p) =>
  p.length > 7 ? "palabra larga" : "palabra corta"
);
*/

/*
let palabrasSize = palabras.map(
  (p) => `palabra ${p.length > 7 ? "larga" : "corta"}`
);
*/

let palabrasSize = palabras.map((palabra) => {
  if (palabra.length > 7) {
    return "palabra larga";
  }

  return "palabra corta";
});

console.log(palabrasSize);
