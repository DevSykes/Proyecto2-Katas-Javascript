/* Dado el siguiente HTML:

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h2 class="fn-insert-here"></h2>
    <p class="fn-remove-me">Eliminame!</p>
    <p>No me elimines!</p>
    <p>No me elimines!</p>
    <p class="fn-remove-me">Eliminame!</p>
    <p>No me elimines!</p>
    <p class="fn-remove-me">Eliminame!</p>
    <p class="fn-remove-me">Eliminame!</p>
    <p>No me elimines!</p>
    <div></div>
    <div></div>
    <div class="fn-insert-here"></div>
    <div class="fn-insert-here"></div>
  </body>
</html> */

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const div1 = document.createElement("div");
document.body.appendChild(div1);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div2 = document.createElement("div");
const p1 = document.createElement("p");
div2.appendChild(p1);
document.body.appendChild(div2);

/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
 loop con javascript. */

const div3 = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const p = document.createElement("p");
  div3.appendChild(p);
}

document.body.appendChild(div3);

/* 2.4 Inserta dinamicamente con javascript en un html una p con el
    texto 'Soy dinámico!'. */

const p2 = document.createElement("p");
p2.textContent = "Soy dinámico!";
document.body.appendChild(p2);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

/* 2.6 Basandote en el siguiente array crea una lista ul > li con
    los textos del array.
    const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];*/

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ul = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
  const li = document.createElement("li");
  li.textContent = apps[i];
  ul.appendChild(li);
}

document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementos = document.querySelectorAll(".fn-remove-me");

elementos.forEach((el) => {
  el.remove();
});

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
    Recuerda que no solo puedes insertar elementos con .appendChild.*/

const p3 = document.createElement("p");
p3.textContent = "Voy en medio!";

const divs = document.querySelectorAll("div");

divs[0].after(p3);

/* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
    .fn-insert-here*/

const divs2 = document.querySelectorAll(".fn-insert-here");

divs2.forEach((div) => {
  const p = document.createElement("p");
  p.textContent = "Voy dentro!";
  div.appendChild(p);
});
