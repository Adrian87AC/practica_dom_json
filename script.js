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

