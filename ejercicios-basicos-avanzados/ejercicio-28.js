/* Dada una lista de álbumes de música, utiliza un bucle para 
sumar todas las duraciones solo de los álbumes de rock 
y luego imprime el total de estas duraciones por consola. */

const albums = [
  { title: "Led Zeppelin IV", genre: "Rock", duration: 42.19 },
  { title: "The Dark Side of the Moon", genre: "Rock", duration: 42.49 },
  { title: "Back in Black", genre: "Rock", duration: 42.11 },
  { title: "Hotel California", genre: "Rock", duration: 43.08 },
  { title: "Abbey Road", genre: "Rock", duration: 47.23 },
  { title: "Thriller", genre: "Pop", duration: 42.19 },
  { title: "A Night at the Opera", genre: "Rock", duration: 43.08 },
  { title: "The Wall", genre: "Rock", duration: 81.0 },
  { title: "Born to Run", genre: "Rock", duration: 39.26 },
  { title: "The Joshua Tree", genre: "Rock", duration: 50.11 },
];

let totalRockDuration = 0;

for (let i = 0; i < albums.length; i++) {
  const album = albums[i];

  if (album.genre === "Rock") {
    totalRockDuration += album.duration;
  }
}

console.log(totalRockDuration);
