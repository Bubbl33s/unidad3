// Recordando los objetos
// LAS CLAVES PUEDEN IR SIN COMILLAS
const perro = {
  nombre: "Firulais",
  raza: "Doberman",
  edad: 5,
  es_adoptado: true, // No olvidar el snake case
  actividades: ["correr", "jugar", "comer"],
  amigos: [
    {
      nombre: "Rocky",
      raza: "Pastor Aleman",
    },
    {
      nombre: "Luna",
      raza: "Labrador",
    },
  ],
};

console.log(perro);

// Acceder a las propiedades de un objeto
console.log(perro.nombre);
console.log(perro["es_adoptado"]);
console.log(perro.actividades);
console.log(perro.actividades[2]); // Se puede indexar
console.log(perro.amigos);
// Cómo podriamos mostrar por consola "Pastor Alemán"
console.log(perro.amigos[0].raza);

// Modificar propiedades de un objeto
perro.edad = 4;
perro.amigos[0]["raza"] = "Pastor Alemán";
console.log(perro);

// Agregar propiedades a un objeto
perro.color = "marrón oscuro";
perro.amigos[1].color = "blanco";
console.log(perro);
