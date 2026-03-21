/* Dado el siguiente javascript, utiliza .filter() para mostrar por consola
los streamers que incluyan la palabra introducida en el input. De esta forma, si
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. */

const streamers = [
  { name: "Rubiuus", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const input = document.querySelector('[data-function="toFilterStreamers"]');
const list = document.querySelector('[data-function="streamerList"]');

input.addEventListener("input", (event) => {
  const searchText = event.target.value.toLowerCase();

  // Filtrar
  const filteredStreamers = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(searchText),
  );

  // Limpiar la lista
  list.innerHTML = "";

  // Añadir streamers filtrados
  filteredStreamers.forEach((streamer) => {
    const li = document.createElement("li");
    li.textContent = streamer.name;
    list.appendChild(li);
  });
});
