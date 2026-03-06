/* Calcular promedio mezclado: Crea una función que reciba por parámetro
un array y cuando es un valor number lo sume y de lo contrario cuente
la longitud del string y lo sume.
Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.
Puedes usar este array para probar tu función: */

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  let total = 0;

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      total = total + list[i];
    } else {
      total = total + list[i].length;
    }
  }

  return total / list.length;
}

console.log(averageWord(mixedElements));
