/* 7.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
.filter() y usa .reduce() para conseguir la media de sus .score.
La función .find() también podría ayudarte para el contrar el genero 'RPG' en el
array .gender. */

const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhalla", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The Last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  { name: "Legend of Zelda: Breath of the wild", genders: ["RPG"], score: 10 },
];

// Filtrar juegos rpg
const rpgGames = videogames.filter((game) =>
  game.genders.find((g) => g === "RPG"),
);

// Sumar
const totalRpgScore = rpgGames.reduce((sum, game) => sum + game.score, 0);

// Media
const averageRpgScore = totalRpgScore / rpgGames.length;

console.log(averageRpgScore);
