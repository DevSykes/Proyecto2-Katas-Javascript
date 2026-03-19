/* 1.1 En base al siguiente javascript, crea variables en base a las propiedades
del objeto usando object destructuring e imprimelas por consola. Cuidado,
no hace falta hacer destructuring del array, solo del objeto. */

const game = {
  title: "The Last of Us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

// Destructuring obj
const { title, gender, year } = game;

console.log(title);
console.log(gender);
console.log(year);

/* 1.2 En base al siguiente javascript, usa destructuring para crear 3 variables
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola. */

const fruits = ["Banana", "Strawberry", "Orange"];

// Destructuring
const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1, fruit2, fruit3);

/* 1.3 En base al siguiente javascript, usa destructuring para crear 2
variables igualandolo a la función e imprimiendolo por consola. */

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

// Destructuring
const { name: animalName, race } = animalFunction();

console.log(animalName);
console.log(race);

/* 1.4 En base al siguiente javascript, usa destructuring para crear las
variables name y itv con sus respectivos valores. Posteriormente crea
3 variables usando igualmente el destructuring para cada uno de los años
y comprueba que todo esta bien imprimiendolo. */

const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

// Destructuring obj
const { name: carName, itv } = car;

// Destructuring
const [year1, year2, year3] = itv;

console.log(carName);
console.log(itv);
console.log(year1, year2, year3);
