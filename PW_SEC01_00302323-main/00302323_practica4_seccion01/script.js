//comprueba si asercion es verdadera
console.log("Legolas" > "Gimli");

//limpiar la consola
console.clear();

//lista de forma interactiva de las propiedades de un objeto
console.dir(window);

//Muestra una representacion HTML del objeto
console.dirxml(document.body);

const marvel = ["Spider Man", "Iron Man", "Capitan America", "Lobezno"];
//Permite agrupar diferentes valores
console.group("Superheroes de Marvel");
marvel.forEach(superhero => console.log(superhero));
console.groupEnd();


