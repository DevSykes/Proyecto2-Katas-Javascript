/* Dado el siguiente HTML:

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="exercise-3.js" defer></script>
    <title>Document</title>
  </head>
  <body>
    <p class="fn-remove-me">Bye bye</p>
    <div data-function="printHere"></div>
  </body>
</html> */

/* 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el
html que imprima cada uno de los paises. const countries = ['Japón',
'Nicaragua', 'Suiza', 'Australia', 'Venezuela']; */

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul1 = document.createElement("ul");

countries.forEach((country) => {
  const li = document.createElement("li");
  li.textContent = country;
  ul1.appendChild(li);
});

document.body.appendChild(ul1);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const removeP = document.querySelector(".fn-remove-me");
removeP.remove();

/* 1.3 Utiliza el array para crear dinamicamente una
lista ul > li de elementos en el div de html con el atributo
data-function="printHere". */

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const printHereDiv = document.querySelector('[data-function="printHere"]');

const ulCars = document.createElement("ul");

cars.forEach((car) => {
  const li = document.createElement("li");
  li.textContent = car;
  ulCars.appendChild(li);
});

printHereDiv.appendChild(ulCars);

/* 1.4 Crea dinamicamente en el html una serie de divs que
contenga un elemento h4 para el titulo y otro elemento img para la imagen. const
contenga un elemento h4 para el titulo y otro elemento img para la imagen. */

const countryPics = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

countryPics.forEach((country) => {
  const div = document.createElement("div");

  const h4 = document.createElement("h4");
  h4.textContent = country.title;

  const img = document.createElement("img");
  img.src = country.imgUrl;

  div.appendChild(h4);
  div.appendChild(img);

  document.body.appendChild(div);
});

/* 1.5 Basandote en el ejercicio anterior. 
Crea un botón que elimine el último elemento de la serie de divs. */

const btn = document.createElement("button");
btn.textContent = "Eliminar último";

document.body.appendChild(btn);

btn.addEventListener("click", () => {
  const divs = document.querySelectorAll("body > div");
  const lastDiv = divs[divs.length - 1];

  if (lastDiv) {
    lastDiv.remove();
  }
});

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que
elimine ese mismo elemento del html. */

countryPics.forEach((country) => {
  const div = document.createElement("div");

  const h4 = document.createElement("h4");
  h4.textContent = country.title;

  const img = document.createElement("img");
  img.src = country.imgUrl;

  const btn = document.createElement("button");
  btn.textContent = "Eliminar";

  btn.addEventListener("click", () => {
    div.remove();
  });

  div.appendChild(h4);
  div.appendChild(img);
  div.appendChild(btn);

  document.body.appendChild(div);
});
