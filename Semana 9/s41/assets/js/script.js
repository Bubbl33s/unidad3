/*
// Métodos de arrays
let nums = [1, 2, 3, 4, 5];

console.log(nums);

// arr.push(x) -> agrega el valor x al final del array
console.log("push");
nums.push(6);
console.log(nums);
nums.push("KJHKAJSDHFGJASHFHKJASGJBASGHJ");
console.log(nums);

// arr.pop() -> elimina el último elemento del array
console.log("pop");
nums.pop();
console.log(nums);
nums.pop();
console.log(nums);

// arr.unshift(x) -> agrega el valor x al inicio del array
console.log("unshift");
nums.unshift(0);
console.log(nums);

// arr.shift() -> eliminar el primer elemento del array
console.log("shift");
nums.shift();
console.log(nums);
*/
/*
let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

// arr.slice(begin, end)
// Crea una copia del array desde el indice de inicio al fin, sin tomar el último
console.log("slice");
let subnums1 = nums.slice(0, 3);

console.log(subnums1);
console.log(nums);

// Ejercicio
// Crear el subarray [3, 4, 5, 6] a partir nums
let subnums2 = nums.slice(2, 6);
console.log(subnums2);
*/

// arr.splice(start, deleteCount, item1, item2, ...)
// Elimina elementos del array y opcionalmente agrega nuevos elementos
let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

// Valor de inicio
console.log("Solo valor de inicio");
let subarr1 = nums.splice(2);
console.log(subarr1);
// El array original se ve modificado (lo que sobra del subarray)
console.log(nums);

// Reasigno el array
console.log("Reasignamos el array");
nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

// Ahora eliminando elementos
console.log("Eliminando elementos");
// Se queda con dos elemntos del subarray
let subarr2 = nums.splice(2, 2);
console.log(subarr2);
console.log(nums);

// Reasigno el array
console.log("Reasignamos el array");
nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

// Ahora eliminando elementos
console.log("Agregando elementos");
// Agrega elementos
let subarr3 = nums.splice(2, 4, "a", "b", true, 12312, "hola");
console.log(subarr3);
console.log(nums);
