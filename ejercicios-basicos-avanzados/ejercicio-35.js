/* Desarrolla una función que busque en un array de objetos
representando mutantes si existe alguno con un poder específico 
y retorne un mensaje indicando si fue encontrado o no.

Considera el caso de múltiples mutantes con el mismo poder. */

const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(mutants, power) {
  let found = false;

  for (let i = 0; i < mutants.length; i++) {
    const mutant = mutants[i];

    if (mutant.power === power) {
      found = true;
    }
  }

  if (found) {
    return "Mutant with the power " + power + " has been found.";
  } else {
    return "No mutant has the power " + power + ".";
  }
}

console.log(findMutantByPower(mutants, "telepathy"));
console.log(findMutantByPower(mutants, "bottomless stomach"));
