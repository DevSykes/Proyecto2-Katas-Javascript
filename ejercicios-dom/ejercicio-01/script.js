/* Dado el siguiente HTML:

<!DOCTYPE html>
<html lang="en">  
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js"defer></script>
    <title>Document</title>
</head>
<body>
    <button class="showme">Pillame!</button>
	<h1 id="pillado">Aqui estoy 8)</h1>
	<p>Soy el power ranger Amarillo</p>
    <p>Soy el power ranger Rojo</p>
    <p>Soy el power ranger Azul</p>
    <p>Soy el power ranger Negro</p>
	<h4 class="pokemon">Bulbasaur</h4>
    <h4 class="pokemon">Charmander</h4>
    <h4 class="pokemon">Pikachu</h4>
    <h4 class="pokemon">Squirtle</h4>
	<span data-function="testMe">Batman</span>
    <span data-function="testMe">Robin</span>
    <span data-function="testMe">Rick</span>
    <span data-function="testMe">Morty</span>
</body>
</html>

</head>
</html> */

//------------------------------------------------//

/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme */

const boton = document.querySelector(".showme");
console.log(boton);

/* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado */

const h1 = document.querySelector("#pillado");
console.log(h1);

/* 1.3 Usa querySelector para mostrar por consola todos los p */

const parrafos = document.querySelectorAll("p");
console.log(parrafos);

/* 1.4 Usa querySelector para mostrar por consola todos los elementos con
la clase.pokemon */

const poke = document.querySelectorAll(".pokemon");
console.log(poke);

/* 1.5 Usa querySelector para mostrar por consola todos los elementos con
el atributo data-function="testMe". */

const testMe = document.querySelectorAll('[data-function="testMe"]');
console.log(testMe);

/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
data-function="testMe". */

const personajes = document.querySelectorAll('[data-function="testMe"]');
console.log(personajes[2]);
console.log(personajes[2].textContent);
