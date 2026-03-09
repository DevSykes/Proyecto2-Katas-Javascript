/* For...in: Usa un for...in para imprimir por consola los datos del alienígena.
Debería tener este formato cada uno de los console.log: "La propiedad ____ tiene cómo valor: ____"

Puedes usar este objeto: */

const alien = {
  name: "Xenomorph",
  species: "Xenomorph XX121",
  origin: "Unknown",
  weight: 180,
};

for (const properties in alien) {
  console.log(
    "La propiedad " + properties + " tiene como valor: " + alien[properties],
  );
}
