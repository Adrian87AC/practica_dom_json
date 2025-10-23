//Ejercicio 1: Acceso al DOM básico
/*Crea una página con un <h1> y un párrafo.
Desde JavaScript, cambia el texto del <h1> usando getElementById y el color del párrafo
con getElementsByTagName.
*/
document.getElementById("miTitulo").innerText = "Nuevo Titulo desde JavaScript";
document.getElementsByTagName("p")[0].style.color = "lightgreen";

//Ejercicio 2: Modificación de varios elementos
/*Crea tres párrafos con la clase texto.
Usa getElementsByClassName para recorrerlos con un for y cambiar el color de fondo a
gris.*/

//Ejercicio 3: Sección con querySelector
/*
Usa querySelector para seleccionar el primer <div> con clase .caja y cambia su borde y
fondo con style.
*/

//Ejercicio 4: querySelectorAll y forEach
/*
Crea tres botones con clase btn-dom.
Recógelos con querySelectorAll y cambia el texto de todos ellos a “DOM listo ”.
*/

//Ejercicio 5: Comparación entre colecciones vivas y estáticas
/*
Crea una lista <ul id="lista"> con dos <li>.
Muestra por consola la diferencia entre getElementsByTagName("li") (viva) y
querySelectorAll("li") (estática) al agregar un nuevo elemento.
*/

//Ejercicio 6: Crear elementos dinámicamente
/*Usa createElement() para crear un <p> con texto "Creado dinámicamente" y añádelo al
body con appendChild().*/

//Ejercicio 7:Crear nodos de texto
/*Crea un <div id="contenedor">.
Genera un nodo de texto con createTextNode() y añádelo dentro del div.*/

//Ejercicio 8: Añadir atributos a un elemento
/*Crea una imagen con createElement("img") y añade atributos con setAttribute():
● src → una URL de imagen de prueba.
● alt → “Imagen generada por JS”.
*/

//Ejercicio 9: Crear estructura completa
/*Crea dinámicamente una tarjeta de Bootstrap (card) con:
● Título (h5)
● Texto (p)
● Botón (button.btn.btn-primary)
Todos generados desde JavaScript y añadidos dentro de un div.container.
*/

//Ejercicio 10: Insertar elementos en distintas posiciones
/*Crea una lista y usa:
● append() para añadir al final,
● prepend() para añadir al inicio,
● before() y after() para colocar nuevos elementos fuera del <ul>.
*/

//Ejercicio 11: Reemplazar y eliminar
/*Crea un párrafo <p> y un botón “Eliminar”.
Al hacer clic, usa remove() para eliminar el párrafo y muestra un mensaje por consola.
Luego, crea un segundo botón “Reemplazar” que use replaceWith() para cambiar un
elemento por otro.*/

//Ejercicio 12: Clonar elementos
/*Crea una tarjeta de Bootstrap con una imagen y texto.
Añade un botón “Clonar tarjeta” que use cloneNode(true) para duplicar la tarjeta y cambiar
el texto del clon.
*/

//Ejercicio 13: Crear lista dinámica con botón
/*Crea un botón “Agregar elemento” que añada un nuevo <li> a una lista cada vez que se
pulsa.
*/

//Ejercicio 14: Eliminar último elemento
/*Usa removeChild() o lastElementChild.remove() para eliminar el último elemento de la lista
creada en el ejercicio anterior.
*/

//Ejercicio 15: Recorrer colección y modificar
/*Selecciona todos los elementos de una lista con querySelectorAll(".item")
Usa forEach() para numerarlos automáticamente:
Ejemplo: Elemento 1, Elemento 2, Elemento 3...
*/

//Ejercicio 16: Crear una galería con JSON local
/*Crea un array JSON con varios objetos:
const imagenes = [
{ titulo: "Montaña", url: "https://via.placeholder.com/150/1" },
{ titulo: "Lago", url: "https://via.placeholder.com/150/2" },
{ titulo: "Bosque", url: "https://via.placeholder.com/150/3" }
];
Recórrelo con forEach() y genera una galería Bootstrap (card por imagen).
*/

//Ejercicio 17: Mostrar datos de API JSONPlaceholder
/*Usa fetch("https://jsonplaceholder.typicode.com/users")
Convierte la respuesta con .json()
Muestra los name y email de cada usuario en una lista <ul> generada dinámicamente.
*/

//Ejercicio 18: Mostrar datos anidados de JSON
/*Usando la misma API, muestra una tabla con name, email y address.city de cada usuario.
Usa table, thead y tbody generados con createElement().
*/

//Ejercicio 19: Filtrar y mostrar datos
/*Filtra los usuarios cuya dirección termine en .biz y muéstralos en tarjetas Bootstrap.
*/

//Ejercicio 20: Ejercicio final: mini “visor de usuarios”
/*Combina todo lo aprendido:
1. Un botón “Cargar usuarios”.
2. Al pulsarlo, realiza un fetch() a https://jsonplaceholder.typicode.com/users.
3. Muestra tarjetas (card) con nombre, correo, y ciudad.
4. Incluye un botón dentro de cada tarjeta para eliminarla del DOM.
5. Incluye otro botón general para clonar el último usuario mostrado.

Usa createElement(), appendChild(), remove(), cloneNode(), y Bootstrap para los estilos.
*/