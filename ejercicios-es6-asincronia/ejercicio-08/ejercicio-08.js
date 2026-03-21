/* Accederemos a los datos de una API pública de Game Of Thrones, queremos un select
con todos los nombres de los personajes para que cuando un usuario seleccione un nombre
salga su imagen en el medio de la página, algo así: (imagen)
Os aportamos el HTML sobre el que haremos el ejercicio.

Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API
y buscar la url necesaria para los datos que queramos, para este paso os pedimos
que de verdad os esforcéis buscándola en la documentación, queremos la url que me traiga
los datos de todos los personajes de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.

URL de la documentación (para que indaguéis): https://thronesapi.com/

Esta sería la URL final (la que deberéis utilizar para vuestra petición):

https://thronesapi.com/api/v2/Characters */

// ====================================================

const select = document.getElementById("character-list");
const img = document.querySelector(".character-image");

// obtener pjs de API
const fetchCharacters = async () => {
  try {
    const res = await fetch("https://thronesapi.com/api/v2/Characters");
    const data = await res.json();

    // Destructuring
    data.forEach(({ fullName, imageUrl }) => {
      const option = document.createElement("option");
      option.value = imageUrl; // URL imagen
      option.textContent = fullName; // Nombre pj
      select.appendChild(option);
    });
  } catch (error) {
    console.error("Error cargando los personajes:", error);
  }
};

// Imagen según pj
select.addEventListener("change", (e) => {
  const imageUrl = e.target.value;
  if (imageUrl) {
    img.src = imageUrl;
    img.alt = select.options[select.selectedIndex].text;
  } else {
    img.src = "";
    img.alt = "";
  }
});

// Llamada a función
fetchCharacters();
