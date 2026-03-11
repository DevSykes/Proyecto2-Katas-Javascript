/* Utiliza un bucle para filtrar personajes de Star Wars por la especie "Human" y guárdalos en un nuevo array llamado humanCharacters.

Imprime este nuevo array por consola. */

const characters = [
  { name: "Luke Skywalker", species: "Human" },
  { name: "Darth Vader", species: "Human" },
  { name: "Chewbacca", species: "Wookiee" },
  { name: "Leia Organa", species: "Human" },
  { name: "R2-D2", species: "Droid" },
  { name: "C-3PO", species: "Droid" },
  { name: "Obi-Wan Kenobi", species: "Human" },
  { name: "Yoda", species: "Unknown" },
  { name: "Han Solo", species: "Human" },
];
const humanCharacters = [];

for (let i = 0; i < characters.length; i++) {
  const character = characters[i];

  if (character.species == "Human") {
    humanCharacters.push(character);
  }
}

console.log(humanCharacters);
