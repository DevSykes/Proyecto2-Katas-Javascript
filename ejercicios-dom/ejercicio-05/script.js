/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
que imprima cada uno de los albums. 
Que tenga la apariencia de una web completa dentro de lo posible.
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
]; */

// Título apariencia
const title = document.createElement("h1");
title.textContent = "Top 5 Metal Classics Albums";
title.style.textAlign = "center";
title.style.fontFamily = "Arial";
title.style.marginTop = "30px";
document.body.appendChild(title);

// Fondo apariencia
document.body.style.backgroundColor = "#f4f4f4";
document.body.style.margin = "0";

// Lista
const ul = document.createElement("ul");
ul.style.listStyle = "none";
ul.style.padding = "0";
ul.style.maxWidth = "400px";
ul.style.margin = "20px auto";

// Álbumes
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

albums.forEach((album) => {
  const li = document.createElement("li");
  li.textContent = album;

  // Apariencia
  li.style.backgroundColor = "white";
  li.style.margin = "10px 0";
  li.style.padding = "12px";
  li.style.borderRadius = "8px";
  li.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
  li.style.fontFamily = "Arial";

  ul.appendChild(li);
});

document.body.appendChild(ul);
