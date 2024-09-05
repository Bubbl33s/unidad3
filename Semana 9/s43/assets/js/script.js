// Modificación de arrays

/*
// .map(función)
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

// 1 -> Dado el siguiente array de números, crear un nuevo array con cada uno de los números multiplicados por 2.
console.log(1);

let nums = [1, 2, 3, 4, 5];
console.log(nums);

// Con bucles
let numsPorDos = [];

for (let num of nums) {
  numsPorDos.push(num * 2);
}

// Usando map
let numsPorDos = nums.map((n) => n * 2);

console.log(numsPorDos);
// El arreglo original no se modifica
console.log(nums);

// 2 -> Dado el siguiente array de strings, crear un array indicando que elementos están en mayuscula (true) y cuales en minuscula (false)
console.log(2);

let letras = ["a", "B", "c", "D", "e"]; // [false, true, false, true, false]

let sonMayusculas = letras.map((c) => c.toUpperCase() == c);

// let sonMayusculas = letras.map((c) => {
//   // Aca pongo mas lineas
//   return c.toUpperCase() == c;
// });

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

// let palabrasSize = palabras.map((p) =>
//   p.length > 7 ? "palabra larga" : "palabra corta"
// );

// let palabrasSize = palabras.map(
//   (p) => `palabra ${p.length > 7 ? "larga" : "corta"}`
// );


let palabrasSize = palabras.map((palabra) => {
  if (palabra.length > 7) {
    return "palabra larga";
  }

  return "palabra corta";
});

console.log(palabrasSize);
*/

/*
// .reduce()
// El método reduce() aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.

// 4 -> Dado el siguiente array de números, sumar todos los números
const nums = [1, 2, 3, 4, 5];
console.log(nums);

// Agregamos el elemento neutro para iniciar la suma
let suma = nums.reduce((a, b) => a + b, 0);

console.log(suma);

// 5 -> Usando el mismo array, multiplicar todos los números
let multiplicacion = nums.reduce((a, b) => a * b, 1);
console.log(multiplicacion);
*/

// .sort(funcionDeComparacion)
// El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de cada elemento en Unicode.
/*
let puntos = [11, 2, 1, 21, 23, 10];
console.log(puntos);

// Ordeno el arreglo por defecto
puntos.sort();
console.log("Ordenamiento por defecto");
console.log(puntos);

// Ordenamiento numérico estricto
puntos.sort((a, b) => a - b);
console.log("Ordenamiento numérico estricto");
console.log(puntos);
*/

/*
// .reverse()
// El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.

const arr = [true, 1, "hola", 54.76, "a"];
console.log(arr);

// Revertimos el arreglo
arr.reverse();
console.log(arr);
*/

// * split()
// El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.
console.log("split");
const frase = "Hola buenos días a todas";
console.log(frase);

// Creamos el array usando el espacio como separador
let palabras = frase.split(" ");
console.log(palabras);

const csv = "Perú,Argentina,Chile,Colombia";
console.log(csv);

// Creamos el array usando la coma (,) como separador
let paises = csv.split(",");
console.log(paises);

// * join()
// El método join() une todos los elementos de un array en una cadena y devuelve esta cadena. Por defecto, los elementos se separan con una coma (",").
console.log("join");

let strPalabras = palabras.join(" ");
console.log(strPalabras);

let strPaises = paises.join();
console.log(strPaises);
