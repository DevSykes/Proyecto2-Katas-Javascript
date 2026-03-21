/* 4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean mayor que 18. */

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesOver18 = ages.filter((age) => age > 18);

console.log(agesOver18);

/* 4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean par. */
// NOTA: Cambio la const original ages a ages1 para evitar error.

const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const evenAges = ages1.filter((age) => age % 2 === 0);

console.log(evenAges);

/* 4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que tengan el gameMorePlayed = 'League of Legends'. */

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const lolStreamers = streamers.filter(
  (s) => s.gameMorePlayed === "League of Legends",
);

console.log(lolStreamers);

/* 4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
usar la funcion .includes() para la comprobación. */
// NOTA: Cambio la const original streamers a streames1 para evitar error.

const streamers1 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const nameWithU = streamers1.filter((s) => s.name.includes("u"));

console.log(nameWithU);

/* 4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35. */

const legendStreamers = streamers1
  .filter((s) => s.gameMorePlayed.includes("Legends"))
  .map((s) => {
    if (s.age > 35) {
      return { ...s, gameMorePlayed: s.gameMorePlayed.toUpperCase() };
    }
    return s;
  });

console.log(legendStreamers);
