/*
// Objetos literales
// Declaramos nuestro objeto
const persona = {
  nombre: "Juan",
  apellido: "Díaz",
  edad: 25,
  dni_cedula: "364573488", // snake_case
  hobbies: ["fútbol", "cine", "leer"],
  licencia_conducir: true,
};

// Mostramos el objeto
console.log(persona);

// ACCEDER O MODIFICAR UN OBJETO
// objeto.clave = valor; Notación de punto
// objeto["clave"] = valor; Notación de corchetes

// Accedemos a una propiedad
// console.log(persona[0]); // Esto da undefined
console.log(persona.nombre);
console.log(persona["nombre"]);
console.log(persona.dni_cedula);
console.log(persona["dni_cedula"]);

// Agregar propiedades
persona.correo = "micorreo@correo.com";
// Mostramos el objeto
console.log(persona);

// Modificar propiedades
persona.correo = "juandiaz36@correo.com";
// Mostramos el objeto
console.log(persona);
*/

// Traer datos de un json
fetch("https://rickandmortyapi.com/api/character/497")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.name);
    console.log(data.gender);

    document.querySelector(".nombre").innerHTML = data.name;
    document.querySelector(".demo-img").src = data.image;
  });
