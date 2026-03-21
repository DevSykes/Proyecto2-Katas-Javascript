/* NOTA: En los ejercicios 2.3 y 2.4 he modificado los nombres de las const originales 
(pointsList y toy) porque declarar varias veces la misma const en el mismo scope genera 
un error de sintaxis. 
Para solucionarlo, he decidido añadir un sufijo '1' (pointsList1 y toy1) para que no
aparezcan errores y mantener la lógica de los ejercicios intacta. */

// 2.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43];

const pointsListCopy = [...pointsList];

console.log(pointsListCopy);

// 2.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const toyCopy = { ...toy };

console.log(toyCopy);

/* 2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
spread operatos. */

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

const combinedPoints = [...pointsList1, ...pointsList2];

console.log(combinedPoints);

/* 2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
con spread operators. */

const toy1 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const newToy = { ...toy1, ...toyUpdate };

console.log(newToy);

/* 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
pero sin editar el array inicial. De nuevo, usando spread operatos. */

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

// Excluir posición 2
const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(colorsCopy);
