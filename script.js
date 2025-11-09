/*
EJERCICIOS DOM Y JSON
Ejercicio 1: 
- Lo más básico que hay: pillar un título y un párrafo
- Cambiarles el texto y el color
- Es como el "Hola mundo" del DOM

Ejercicio 2:
- Crear tres párrafos con clase 'texto'
- Ponerles fondo gris a todos de una vez
- Para practicar cómo seleccionar varios elementos

Ejercicio 3:
- Usar querySelector para pillar una caja
- Cambiarle el borde y el fondo
- Es más fácil que getElementById porque usa selectores CSS

Ejercicio 4:
- Crear tres botones con clase btn-dom
- Cambiarles el texto a todos de golpe con forEach
- Útil cuando tienes que modificar varios elementos iguales

Ejercicio 5:
- Ver qué pasa con getElementsByTagName vs querySelectorAll
- Cuando añades elementos nuevos, uno se actualiza solo y el otro no
- Para entender las colecciones vivas y estáticas

Ejercicio 6:
- Crear un párrafo desde cero con JavaScript
- Es la base para crear elementos dinámicamente
- Usar createElement y appendChild

Ejercicio 7:
- Crear un div y meterle texto dentro
- Usar createTextNode para el texto
- Otra forma de crear contenido

Ejercicio 8:
- Crear una imagen y ponerle src y alt
- Aprender a usar setAttribute
- Para elementos que necesitan atributos

Ejercicio 9:
- Crear una tarjeta de Bootstrap completa desde JS
- Ya es más complejo porque hay que crear y anidar varios elementos
- Para practicar crear estructuras más grandes

Ejercicio 10:
- Probar diferentes formas de meter elementos en una lista
- append, prepend, before, after
- Ver las diferentes posiciones donde podemos insertar

Ejercicio 11:
- Añadir botones para eliminar y reemplazar elementos
- Útil cuando quieres que el usuario pueda quitar o cambiar cosas
- Usar remove() y replaceWith()

Ejercicio 12:
- Clonar una tarjeta entera
- Como hacer copy-paste pero desde código
- Usar cloneNode(true) para copiar todo

Ejercicio 13:
- Hacer una lista que crece al pulsar un botón
- Para practicar eventos y crear elementos dinámicamente
- Cada click añade un nuevo elemento

Ejercicio 14:
- Quitar el último elemento de una lista
- De dos formas diferentes: remove() y removeChild()
- Para ver diferentes maneras de hacer lo mismo

Ejercicio 15:
- Numerar automáticamente elementos de una lista
- Usar forEach para recorrer y modificar
- Útil para índices o numeraciones automáticas

Ejercicio 16:
- Crear una galería de imágenes desde un array
- Primera vez que usamos datos JSON
- Crear tarjetas para cada imagen

Ejercicio 17:
- Lo mismo pero pillando datos de una API real
- Primera vez que usamos fetch
- Mostrar usuarios en una lista

Ejercicio 18:
- Mostrar datos de usuarios en una tabla
- Incluir datos anidados como la ciudad
- Crear una tabla completa desde JS

Ejercicio 19:
- Filtrar usuarios que tengan web .biz
- Mostrarlos en tarjetas de Bootstrap
- Practicar filter y manipulación de datos

Ejercicio 20:
- El ejercicio final que junta todo
- Cargar datos, mostrarlos, poder eliminarlos y clonarlos
- Como un mini-CRUD con todo lo aprendido
*/

//Ejercicio 1: Acceso básico al DOM
(function ejercicio1(){ // Función autoejecutable para encapsular el código
    
    // Obtener el elemento del título por su ID 'miTitulo'
    const titulo = document.getElementById("miTitulo");
    
    // Obtener el primer párrafo del documento
    const parrafo = document.getElementsByTagName("p")[0];

    // Si existe el título, cambiar su texto
    if (titulo) {
        titulo.innerText = "Nuevo Titulo desde JavaScript";
    }

    // Si existe el párrafo, cambiar su color
    if (parrafo) {
        parrafo.style.color = "lightgreen";
    }
})();

//Ejercicio 2: Modificación de varios elementos
function variosElementos(){ // Función autoejecutable para encapsular el código
    // Obtener todos los elementos con clase 'texto'
    let textos = document.getElementsByClassName('texto');
    
    // Si hay menos de 3 párrafos, crear los que falten
    if(textos.length < 3){
        for(let i = textos.length; i < 3; i++){
            // Crear nuevo párrafo
            const p = document.createElement('p');
            // Asignar clase 'texto'
            p.className = 'texto';
            // Asignar texto con número
            p.innerText = 'Párrafo ' + (i + 1) + ' (creado por JS)';
            // Añadir al body
            document.body.appendChild(p);
        }
        // Actualizar colección (es viva, se actualiza sola)
        textos = document.getElementsByClassName('texto');
    }

    // Recorrer todos los párrafos y aplicar estilos
    for (let i = 0; i < textos.length; i++){
        textos[i].style.backgroundColor = 'ligthgray'; // Color de fondo
        textos[i].style.padding = '6px';              // Relleno
        textos[i].style.margin = '4px 0';             // Margen vertical
    }
};

// Ejercicio 3: Sección con querySelector
function seleccionarCaja(){
    // Seleccionar el primer elemento con clase 'caja'
    const caja = document.querySelector('.caja');
    
    // Si no existe, salir
    if(!caja) return;
    
    // Aplicar estilos
    caja.style.border = '2px solid #333';        // Borde
    caja.style.backgroundColor = '#f7f7f7';      // Color de fondo
    caja.style.padding = '8px';                  // Relleno
}

//Ejercicio 4: querySelectorAll y forEach
function botonesDOM(){
    // Seleccionar todos los botones con clase btn-dom
    let botones = document.querySelectorAll('.btn-dom');
    // Si hay menos de 3 botones, crear los que faltan
    if (botones.length < 3) {
        for (let i = botones.length; i < 3; i++) {
            // Crear nuevo botón
            const btn = document.createElement('button');
            // Asignar clases de Bootstrap
            btn.className = 'btn-dom btn btn-secondary';
            // Establecer tipo botón
            btn.type = 'button';
            // Asignar texto inicial
            btn.innerText = 'Botón ' + (i + 1);
            // Añadir margen
            btn.style.margin = '4px';
            // Añadir al body
            document.body.appendChild(btn);
        }
        // Actualizar lista de botones
        botones = document.querySelectorAll('.btn-dom');
    }
    // Cambiar texto de todos los botones
    botones.forEach(b => b.innerText = 'DOM listo ');
};

//Ejercicio 5: Comparación colecciones
function compararColecciones(){
    // Obtener o crear lista
    let lista = document.getElementById('lista');
    if (!lista) {
        // Crear nueva lista
        lista = document.createElement('ul');
        lista.id = 'lista';
        // Crear primeros dos elementos
        const li1 = document.createElement('li');
        li1.textContent = 'Elemento 1';
        const li2 = document.createElement('li');
        li2.textContent = 'Elemento 2';
        // Añadir elementos a la lista
        lista.appendChild(li1);
        lista.appendChild(li2);
        // Añadir lista al body
        document.body.appendChild(lista);
    }

    // Obtener colecciones
    const vivos = lista.getElementsByTagName('li');      // colección viva
    const estaticos = lista.querySelectorAll('li');      // colección estática

    // Mostrar longitud inicial
    console.log('Antes:', vivos.length, estaticos.length);

    // Añadir nuevo elemento
    const nuevo = document.createElement('li');
    nuevo.textContent = 'Elemento 3 (añadido)';
    lista.appendChild(nuevo);

    // Mostrar longitud final (la colección viva habrá aumentado)
    console.log('Después:', vivos.length, estaticos.length);
};

//Ejercicio 6: Crear elementos dinámicamente
function crearParrafoDinamico(){
    // Verificar si ya existe el párrafo para evitar duplicados
    if(document.getElementById('parrafo-dinamico-e6')) return;
    
    // Crear nuevo elemento párrafo
    const p = document.createElement('p');
    // Asignar un ID único
    p.id = 'parrafo-dinamico-e6';
    // Asignar el texto del párrafo
    p.textContent = 'Creado dinámicamente';
    // Añadir el párrafo al body del documento
    document.body.appendChild(p);
};

// Ejercicio 7: Crear nodos de texto
function crearNodoTexto(){
    // Buscar si existe el contenedor, si no, crearlo
    let cont = document.getElementById('contenedor');
    if(!cont){
        cont = document.createElement('div');
        cont.id = 'contenedor';
    }
    // Evitar duplicados usando dataset
    if(cont.dataset.ej7 == 'true') return;
    
    // Crear un nodo de texto
    const nodoTexto = document.createTextNode('Texto creado dinamicamente con createTextNode()');
    // Añadir el nodo de texto al contenedor
    cont.appendChild(nodoTexto);
    // Marcar como completado
    cont.dataset.ej7 = 'true';
};

// Ejercicio 8: Añadir atributos a un elemento
function crearImagenEj8(){
    // Verificar si ya existe la imagen
    if(document.getElementById('imagen')) return;
    
    // Crear elemento imagen
    const imagen = document.createElement('img'); // Corregido: 'imagen' -> 'img'
    // Asignar ID
    imagen.id = 'imagen';
    // Establecer atributo src
    imagen.setAttribute('src', 'https://via.placeholder.com/300x200');
    // Establecer atributo alt
    imagen.setAttribute('alt', 'imagen generada');
    // Añadir clase de Bootstrap
    imagen.className = 'img-fluid';
    // Establecer estilos inline
    imagen.style.display = 'block';
    imagen.style.margin = '8px 0';
    // Añadir la imagen al body
    document.body.appendChild(imagen);
};

// Ejercicio 9: Crear estructura completa de tarjeta Bootstrap
function crearTarjetaEj9(){
    // Verificar si ya existe el contenedor
    if(document.getElementById('container')) return;
    
    // Crear contenedor principal
    const container = document.createElement('div');
    container.id = 'container';
    container.className = 'container';
    container.style.marginTop = '12px';

    // Crear fila
    const row = document.createElement('div');
    row.className = 'row';

    // Crear columna
    const col = document.createElement('div');
    col.className = 'col';

    // Crear tarjeta
    const card = document.createElement('div');
    card.className = 'card';

    // Crear cuerpo de la tarjeta
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Crear título de la tarjeta
    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = 'Titulo de la tarjeta';

    // Crear texto de la tarjeta
    const texto = document.createElement('p');
    texto.className = 'card-text';
    texto.textContent = "Este es un texto";

    // Crear botón
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'btn btn-primary';
    boton.textContent = 'Acción';
    // Añadir evento click al botón
    boton.addEventListener('click', function(){
        console.log('Boton de la tarjeta pulsado');
        title.textContent = 'Acción realizada';
    });

    // Ensamblar la estructura anidada
    cardBody.appendChild(title);
    cardBody.appendChild(texto);
    cardBody.appendChild(boton);
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);
    container.appendChild(row);
    // Añadir al body
    document.body.appendChild(container);
};

// Ejercicio 10: Insertar elementos en distintas posiciones
function ejercicio10(){
    // Verificar si ya existe el contenedor
    if(document.getElementById('container')) return;

    // Crear contenedor principal
    const cont = document.createElement('div');
    cont.id = 'container';
    cont.style.margin = '12px 0';
    cont.style.padding = '8px';
    cont.style.border = '1px solid #ddd';
    cont.style.background = '#fbfbfb';

    // Crear título
    const titulo = document.createElement('h4');
    titulo.textContent = 'Insertar cambios';
    titulo.style.marginTop = '0';

    // Crear lista inicial con dos elementos
    const lista = document.createElement('ul');
    lista.id = 'lista';
    lista.style.paddingLeft = '20px';
    for(let i = 1; i <= 2; i++){
        const li = document.createElement('li');
        li.textContent = 'Elemento ' + i;
        lista.appendChild(li);
    }

    // Crear div para botones
    const botonesDiv = document.createElement('div');
    botonesDiv.style.margin = '8px 0';
    botonesDiv.style.display = 'flex';
    botonesDiv.style.gap = '6px';

    // Función helper para crear botones
    const crearBoton = (texto) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'btn btn-sm btn-outline-primary';
        b.textContent = texto;
        return b;
    };

    // Crear los cuatro botones
    const btnAppend = crearBoton('append (al final)');
    const btnPrepend = crearBoton('prepend (al inicio)');
    const btnBefore = crearBoton('before (fuera, antes del ul)');
    const btnAfter = crearBoton('after (fuera, después del ul)');

    // Añadir botones al div
    botonesDiv.appendChild(btnAppend);
    botonesDiv.appendChild(btnPrepend);
    botonesDiv.appendChild(btnBefore);
    botonesDiv.appendChild(btnAfter);

    // Contadores para elementos
    let contadorLi = 3;
    let contadorFueraAntes = 1;
    let contadorFueraDespues = 1;

    // Evento para append (añadir al final)
    btnAppend.addEventListener('click', () =>{
        const li = document.createElement('li');
        li.textContent = 'Elemento ' + (contadorLi++);
        lista.append(li);
    });

    // Evento para prepend (añadir al inicio)
    btnPrepend.addEventListener('click', () =>{
        const li = document.createElement('li');
        li.textContent = 'Elemento' + (contadorLi++);
        lista.prepend(li);
    });

    // Evento para after (añadir después)
    btnBefore.addEventListener('click', () =>{
        const p = document.createElement('p');
        p.textContent = 'Elemento fuera (after) ' + (contadorFueraDespues++);
        p.style.margin = '6px 0';
        p.style.padding = '6px';
        p.style.background = '#efe';
        lista.after(p);
    });

    // Ensamblar estructura final
    cont.appendChild(titulo);
    cont.appendChild(botonesDiv);
    cont.appendChild(lista);
    document.body.appendChild(cont);
};

// Ejercicio 11: Reemplazar y eliminar elementos
function ejercicio11(){
    // Verificar si ya existe el contenedor
    if(document.getElementById('e11')) return;

    // Crear contenedor principal
    const cont = document.createElement('div');
    cont.id = 'e11';
    cont.style.margin = '12px 0';
    cont.style.padding = '8px';
    cont.style.border = '1px solid #ddd';
    cont.style.background = '#fff9f0';

    // Crear título
    const titulo = document.createElement('h4');
    titulo.textContent = 'Reemplazar y eliminar';
    titulo.style.marginTop = '0';

    // Crear párrafo que se manipulará
    const parrafo = document.createElement('p');
    parrafo.id = 'parrafo';
    parrafo.textContent = 'Este puede ser eliminado o reemplazado. ';
    parrafo.style.padding = '6px';
    parrafo.style.background = '#f0f8ff';

    // Crear botón eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.type = 'button';
    btnEliminar.className = 'btn btn-sm btn-danger';
    btnEliminar.style.marginRight = '6px';
    btnEliminar.textContent = 'Eliminar';
    
    // Evento click para eliminar
    btnEliminar.addEventListener('click', function(){
        const p = document.getElementById('parrafo');
        if(!p){
            console.log('Ya no existe');
            return;
        }
        p.remove();
        console.log('Eliminado usando remove()');
    });

    // Crear botón reemplazar
    const btnReemplazar = document.createElement('button');
    btnReemplazar.type = 'button';
    btnReemplazar.className = 'btn btn-sm btn-warning';
    btnReemplazar.textContent = 'Reemplazar';
    
    // Evento click para reemplazar
    btnReemplazar.addEventListener('click', function(){
        const p = document.getElementById('parrafo');
        if(!p){
            console.log('No hay para reemplazar.');
            return;
        }
        const nuevo = document.createElement('div');
        nuevo.id = 'reemplazo';
        nuevo.textContent = 'Elemento reemplazado.';
        nuevo.style.padding = '6px';
        nuevo.style.background = '#fff4e6';
        p.replaceWith(nuevo);
        console.log('Elemento reemplazado usando replaceWith()');
    });

    // Ensamblar estructura
    cont.appendChild(titulo);
    cont.appendChild(parrafo);
    cont.appendChild(btnEliminar);
    cont.appendChild(btnReemplazar);
    document.body.appendChild(cont);
};

// Ejercicio 12: Clonar elementos
function ejercicio12(){
    // Verificar si ya existe el contenedor
    if(document.getElementById('e12')) return;

    // Crear contenedor principal
    const cont = document.createElement('div');
    cont.id = 'e12';
    cont.style.margin = '12px 0';

    // Crear título
    const titulo = document.createElement('h4');
    titulo.textContent = 'Clonar tarjeta';
    titulo.style.marginTop = '0';

    // Crear tarjeta original
    const card = document.createElement('div');
    card.className = 'card';
    card.id = 'card-e12';
    card.style.width = '18rem';

    // Crear imagen de la tarjeta
    const imagen = document.createElement('img');
    imagen.className = 'card-img-top';
    imagen.alt = 'Ejemplo';
    imagen.src = "https://via.placeholder.com/300x200";

    // Crear cuerpo de la tarjeta
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Crear título de la tarjeta
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = 'Tarjeta original';

    // Crear texto de la tarjeta
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = 'Texto de ejemplo dentro de la tarjeta.';

    // Crear botón para clonar
    const btnClonar = document.createElement('button');
    btnClonar.type = 'button';
    btnClonar.className = 'btn btn-sm btn-primary';
    btnClonar.textContent = 'Clonar tarjeta';
    btnClonar.style.marginTop = '8px';

    // Ensamblar tarjeta original
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(imagen);
    card.appendChild(cardBody);

    // Crear contenedor para galería
    const galeria = document.createElement('div');
    galeria.id = 'galeria-e12';
    galeria.style.display = 'flex';
    galeria.style.flexWrap = 'wrap';
    galeria.style.gap = '12px';
    galeria.style.marginTop = '8px';

    // Añadir tarjeta original a la galería
    galeria.appendChild(card);

    // Contador para clones y evento de clonación
    let contadorClones = 1;
    btnClonar.addEventListener('click', function(){
        const original = document.getElementById('card-e12');
        if (!original) return;
        
        // Clonar tarjeta completa
        const clon = original.cloneNode(true);
        clon.id = 'card-e12-clone-' + contadorClones;
        
        // Actualizar contenido del clon
        const tituloClon = clon.querySelector('.card-title');
        const textoClon = clon.querySelector('.card-text');
        if (tituloClon) tituloClon.textContent = `Tarjeta clon ${contadorClones}`;
        if (textoClon) textoClon.textContent = `Este es el clon número ${contadorClones}.`;
        
        // Añadir botón para eliminar el clon
        const btnEliminarClon = document.createElement('button');
        btnEliminarClon.type = 'button';
        btnEliminarClon.className = 'btn btn-sm btn-danger';
        btnEliminarClon.textContent = 'Eliminar clon';
        btnEliminarClon.style.display = 'block';
        btnEliminarClon.style.marginTop = '6px';
        btnEliminarClon.addEventListener('click', function(){
            clon.remove();
        });
        
        // Añadir botón eliminar al clon
        const bodyClon = clon.querySelector('.card-body') || clon;
        bodyClon.appendChild(btnEliminarClon);

        // Añadir clon a la galería
        galeria.appendChild(clon);
        contadorClones++;
    });

    // Ensamblar estructura final
    cont.appendChild(titulo);
    cont.appendChild(btnClonar);
    cont.appendChild(galeria);
    document.body.appendChild(cont);
};

// Ejercicio 13: Lista dinámica con botón
function ejercicio13(){
    // Verificar si ya existe el contenedor
    if (document.getElementById('e13-container')) return;

    // Crear contenedor principal
    const cont = document.createElement('div');
    cont.id = 'e13-container';
    cont.style.margin = '12px 0';
    cont.style.padding = '8px';
    cont.style.border = '1px solid #ddd';
    cont.style.background = '#f8f9fa';

    // Crear título
    const titulo = document.createElement('h4');
    titulo.textContent = 'Ejercicio 13: Lista dinámica';
    titulo.style.marginTop = '0';

    // Crear botón para agregar elementos
    const btnAgregar = document.createElement('button');
    btnAgregar.type = 'button';
    btnAgregar.id = 'btn-agregar-e13';
    btnAgregar.className = 'btn btn-sm btn-primary';
    btnAgregar.textContent = 'Agregar elemento';
    btnAgregar.style.marginBottom = '8px';

    // Crear lista
    const lista = document.createElement('ul');
    lista.id = 'lista-e13';
    lista.className = 'list-group';
    lista.style.marginTop = '8px';

    // Contador para elementos
    let contador = 1;

    // Evento click para agregar elementos
    btnAgregar.addEventListener('click', () => {
        const li = document.createElement('li');
        li.className = 'list-group-item item';
        li.textContent = 'Elemento ' + (contador++);
        lista.appendChild(li);
        // Hacer scroll hasta el nuevo elemento
        li.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    // Ensamblar estructura
    cont.appendChild(titulo);
    cont.appendChild(btnAgregar);
    cont.appendChild(lista);
    document.body.appendChild(cont);
};

// Ejercicio 14: Eliminar último elemento
function ejercicio14(){
    // Verificar si ya existe el contenedor
    if (document.getElementById('e14-container')) return;

    // Crear contenedor principal
    const cont = document.createElement('div');
    cont.id = 'e14-container';
    cont.style.margin = '12px 0';
    cont.style.padding = '8px';
    cont.style.border = '1px solid #ddd';
    cont.style.background = '#f1f7ff';

    // Crear título
    const titulo = document.createElement('h4');
    titulo.textContent = 'Ejercicio 14: Eliminar último elemento';
    titulo.style.marginTop = '0';

    // Obtener o crear lista del ejercicio 13
    let lista = document.getElementById('lista-e13');
    if (!lista) {
        lista = document.createElement('ul');
        lista.id = 'lista-e13';
        lista.style.marginTop = '8px';
        // Crear elementos de ejemplo
        for (let i = 1; i <= 3; i++) {
            const li = document.createElement('li');
            li.className = 'list-group-item item';
            li.textContent = 'Elemento de ejemplo ' + i;
            lista.appendChild(li);
        }
    }

    // Crear contenedor para botones
    const botonesDiv = document.createElement('div');
    botonesDiv.style.marginTop = '8px';
    botonesDiv.style.display = 'flex';
    botonesDiv.style.gap = '8px';

    // Crear botón para eliminar usando remove()
    const btnRemove = document.createElement('button');
    btnRemove.type = 'button';
    btnRemove.className = 'btn btn-sm btn-danger';
    btnRemove.textContent = 'Eliminar último (lastElementChild.remove())';
    btnRemove.addEventListener('click', () => {
        const lst = document.getElementById('lista-e13');
        if (!lst || !lst.lastElementChild) {
            console.log('No hay elementos para eliminar.');
            return;
        }
        lst.lastElementChild.remove();
        console.log('Eliminado usando lastElementChild.remove()');
    });

    // Crear botón para eliminar usando removeChild()
    const btnRemoveChild = document.createElement('button');
    btnRemoveChild.type = 'button';
    btnRemoveChild.className = 'btn btn-sm btn-warning';
    btnRemoveChild.textContent = 'Eliminar último (removeChild())';
    btnRemoveChild.addEventListener('click', () => {
        const lst = document.getElementById('lista-e13');
        if (!lst || !lst.lastElementChild) {
            console.log('No hay elementos para eliminar.');
            return;
        }
        lst.removeChild(lst.lastElementChild);
        console.log('Eliminado usando removeChild()');
    });

    // Añadir botones al contenedor
    botonesDiv.appendChild(btnRemove);
    botonesDiv.appendChild(btnRemoveChild);

    // Ensamblar estructura
    cont.appendChild(titulo);
    cont.appendChild(botonesDiv);
    cont.appendChild(lista);
    document.body.appendChild(cont);
};

// Ejercicio 15: Recorrer colección y modificar
function ejercicio15(){
    // Obtener todos los elementos con clase 'item'
    const items = document.querySelectorAll('.item');
    // Si no hay elementos, salir
    if(!items || items.length === 0) return;
    
    // Recorrer elementos y modificar su texto
    items.forEach((element, index) => {
        element.textContent = `Elemento ${index + 1}`;
    });
};

// Ejercicio 16: Crear una galería con JSON local
/*Crea un array JSON con varios objetos:
const imagenes = [
{ titulo: "Montaña", url: "https://via.placeholder.com/150/1" },
{ titulo: "Lago", url: "https://via.placeholder.com/150/2" },
{ titulo: "Bosque", url: "https://via.placeholder.com/150/3" }
];
Recórrelo con forEach() y genera una galería Bootstrap (card por imagen).
*/
function ejercicio16(){
    // Evitar duplicados comprobando si ya existe el contenedor
    if (document.getElementById('e16-container')) return;

    // Array de imágenes con datos de ejemplo
    const imagenes = [
        { 
            titulo: "Montaña", // Título de la imagen
            url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop" // URL de la imagen
        },
        { 
            titulo: "Lago", 
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&h=300&fit=crop" 
        },
        { 
            titulo: "Bosque", 
            url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=500&h=300&fit=crop" 
        },
        { 
            titulo: "Ciudad", 
            url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop" 
        }
    ];

    // Crear contenedor principal
    const cont = document.createElement('div');
    cont.id = 'e16-container';
    cont.className = 'container';
    cont.style.margin = '12px 0';

    // Crear título de la sección
    const titulo = document.createElement('h4');
    titulo.textContent = 'Ejercicio 16: Galería desde JSON local';
    titulo.style.marginTop = '0';
    cont.appendChild(titulo);

    // Crear fila para el grid de Bootstrap
    const row = document.createElement('div');
    row.className = 'row';

    // Recorrer cada imagen del array
    imagenes.forEach((imgObj, index) => {
        // Crear columna para cada imagen
        const col = document.createElement('div');
        col.className = 'col-sm-6 col-md-4';
        col.style.marginBottom = '12px';

        // Crear tarjeta de Bootstrap
        const card = document.createElement('div');
        card.className = 'card';

        // Crear elemento imagen
        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = imgObj.url;
        img.alt = imgObj.titulo;
        img.style.objectFit = 'cover';
        img.style.height = '180px';

        // Crear cuerpo de la tarjeta
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Crear título de la tarjeta
        const h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.textContent = imgObj.titulo;

        // Crear botón para ver imagen
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn-sm btn-primary';
        btn.textContent = 'Ver';
        
        // Añadir evento al botón para abrir imagen en nueva ventana
        btn.addEventListener('click', () => {
            const w = window.open('', '_blank');
            w.document.writeln('<title>' + imgObj.titulo + '</title>');
            w.document.writeln('<img src="' + imgObj.url + '" alt="' + imgObj.titulo + 
                             '" style="max-width:100%;height:auto;display:block;margin:16px auto;">');
        });

        // Ensamblar la estructura de la tarjeta
        cardBody.appendChild(h5);
        cardBody.appendChild(btn);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
    });

    // Añadir todo al contenedor y al documento
    cont.appendChild(row);
    document.body.appendChild(cont);
};

// Ejercicio 17: Mostrar datos de API JSONPlaceholder
function ejercicio17(){
    // Evitar duplicados
    if (document.getElementById('e17-container')) return;

    // Crear contenedor principal
    const cont = document.createElement('div');
    cont.id = 'e17-container';
    cont.style.margin = '12px 0';
    cont.style.padding = '8px';
    cont.style.border = '1px solid #ddd';
    cont.style.background = '#f9f9f9';

    // Crear título
    const titulo = document.createElement('h4');
    titulo.textContent = 'Ejercicio 17: Cargar usuarios (JSONPlaceholder)';
    titulo.style.marginTop = '0';

    // Crear botón de carga
    const btnCargar = document.createElement('button');
    btnCargar.type = 'button';
    btnCargar.id = 'btn-cargar-usuarios';
    btnCargar.className = 'btn btn-sm btn-primary';
    btnCargar.textContent = 'Cargar usuarios';

    // Crear elemento para mensajes
    const mensaje = document.createElement('div');
    mensaje.id = 'msg-e17';
    mensaje.style.marginTop = '8px';
    mensaje.style.color = '#333';
    mensaje.textContent = '';

    // Crear lista para usuarios
    const lista = document.createElement('ul');
    lista.id = 'lista-usuarios-e17';
    lista.style.marginTop = '8px';
    lista.style.paddingLeft = '20px';

    // Función asíncrona para cargar usuarios
    async function cargarUsuarios() {
        mensaje.textContent = 'Cargando...';
        lista.innerHTML = '';
        try {
            // Hacer petición fetch
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!resp.ok) throw new Error('Error en la respuesta: ' + resp.status);
            
            // Convertir respuesta a JSON
            const users = await resp.json();
            if (!Array.isArray(users) || users.length === 0) {
                mensaje.textContent = 'No se han encontrado usuarios.';
                return;
            }

            // Crear elemento de lista para cada usuario
            users.forEach(user => {
                const li = document.createElement('li');
                li.className = 'list-group-item';
                li.textContent = `${user.name} — ${user.email}`;
                lista.appendChild(li);
            });

            mensaje.textContent = `Cargados ${users.length} usuarios.`;
        } catch (err) {
            console.error(err);
            mensaje.textContent = 'Error al cargar usuarios. Mira la consola.';
        }
    }

    // Añadir evento al botón
    btnCargar.addEventListener('click', cargarUsuarios);

    // Ensamblar estructura
    cont.appendChild(titulo);
    cont.appendChild(btnCargar);
    cont.appendChild(mensaje);
    cont.appendChild(lista);
    document.body.appendChild(cont);
};

// Ejercicio 18: Mostrar datos anidados de JSON en una tabla
function ejercicio18(){
    // Evitar duplicados verificando si existe el contenedor
    if (document.getElementById('e18-container')) return;

    // Crear el contenedor principal con estilos
    const cont = document.createElement('div');
    cont.id = 'e18-container';
    cont.style.margin = '12px 0';
    cont.style.padding = '8px';
    cont.style.border = '1px solid #ddd';
    cont.style.background = '#ffffff';

    // Crear título del ejercicio
    const titulo = document.createElement('h4');
    titulo.textContent = 'Ejercicio 18: Tabla de usuarios (name, email, city)';
    titulo.style.marginTop = '0';

    // Crear botón para cargar datos
    const btnCargar = document.createElement('button');
    btnCargar.type = 'button';
    btnCargar.id = 'btn-cargar-e18';
    btnCargar.className = 'btn btn-sm btn-primary';
    btnCargar.textContent = 'Cargar tabla';

    // Crear div para mensajes de estado
    const mensaje = document.createElement('div');
    mensaje.id = 'msg-e18';
    mensaje.style.marginTop = '8px';
    mensaje.style.color = '#333';

    // Crear tabla Bootstrap
    const tabla = document.createElement('table');
    tabla.id = 'tabla-e18';
    tabla.className = 'table table-striped';
    tabla.style.marginTop = '8px';
    tabla.style.width = '100%';

    // Crear encabezado de tabla
    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');
    // Crear columnas del encabezado
    ['Nombre', 'Email', 'Ciudad'].forEach(h => {
        const th = document.createElement('th');
        th.scope = 'col';
        th.textContent = h;
        headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    tabla.appendChild(thead);

    // Crear cuerpo de la tabla
    const tbody = document.createElement('tbody');
    tabla.appendChild(tbody);

    // Función asíncrona para cargar datos
    async function cargarTabla() {
        mensaje.textContent = 'Cargando...';
        tbody.innerHTML = ''; // Limpiar tabla
        try {
            // Hacer petición a la API
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!resp.ok) throw new Error('Respuesta no OK: ' + resp.status);
            const users = await resp.json();
            
            // Verificar si hay datos
            if (!Array.isArray(users) || users.length === 0) {
                mensaje.textContent = 'No se encontraron usuarios.';
                return;
            }

            // Crear fila para cada usuario
            users.forEach(user => {
                const tr = document.createElement('tr');

                // Celda para el nombre
                const tdName = document.createElement('td');
                tdName.textContent = user.name || '';
                tr.appendChild(tdName);

                // Celda para el email
                const tdEmail = document.createElement('td');
                tdEmail.textContent = user.email || '';
                tr.appendChild(tdEmail);

                // Celda para la ciudad (dato anidado)
                const tdCity = document.createElement('td');
                tdCity.textContent = (user.address && user.address.city) ? user.address.city : '';
                tr.appendChild(tdCity);

                tbody.appendChild(tr);
            });
            mensaje.textContent = `Cargados ${users.length} usuarios.`;
        } catch (err) {
            console.error(err);
            mensaje.textContent = 'Error al cargar datos. Mira la consola.';
        }
    }

    // Asignar evento al botón
    btnCargar.addEventListener('click', cargarTabla);

    // Montar estructura
    cont.appendChild(titulo);
    cont.appendChild(btnCargar);
    cont.appendChild(mensaje);
    cont.appendChild(tabla);
    document.body.appendChild(cont);
};

// Ejercicio 19: Filtrar usuarios con website .biz
function ejercicio19(){
    // Evitar duplicados
    if (document.getElementById('e19-container')) return;

    // Crear contenedor principal
    const cont = document.createElement('div');
    cont.id = 'e19-container';
    cont.style.margin = '12px 0';
    cont.style.padding = '8px';
    cont.style.border = '1px solid #ddd';
    cont.style.background = '#fafafa';

    // Crear título
    const titulo = document.createElement('h4');
    titulo.textContent = 'Ejercicio 19: Usuarios con website .biz';
    titulo.style.marginTop = '0';

    // Crear botón de carga
    const btnCargar = document.createElement('button');
    btnCargar.type = 'button';
    btnCargar.className = 'btn btn-sm btn-primary';
    btnCargar.textContent = 'Cargar usuarios .biz';

    // Crear div para mensajes
    const mensaje = document.createElement('div');
    mensaje.style.marginTop = '8px';
    mensaje.style.color = '#333';

    // Crear contenedor flex para tarjetas
    const galeria = document.createElement('div');
    galeria.className = 'd-flex flex-wrap';
    galeria.style.gap = '12px';
    galeria.style.marginTop = '8px';

    // Función para cargar usuarios .biz
    async function cargarBiz() {
        mensaje.textContent = 'Cargando...';
        galeria.innerHTML = '';
        try {
            // Fetch a la API
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!resp.ok) throw new Error('Respuesta no OK: ' + resp.status);
            const users = await resp.json();
            
            // Filtrar usuarios con website .biz
            const bizUsers = (Array.isArray(users) ? users : [])
                .filter(u => u.website && u.website.toLowerCase().endsWith('.biz'));
            
            if (bizUsers.length === 0) {
                mensaje.textContent = 'No se encontraron usuarios con website .biz.';
                return;
            }

            // Crear tarjeta para cada usuario filtrado
            bizUsers.forEach(user => {
                // Crear tarjeta Bootstrap
                const card = document.createElement('div');
                card.className = 'card';
                card.style.width = '18rem';
                card.style.minWidth = '220px';

                // Crear cuerpo de la tarjeta
                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                // Título con nombre
                const h5 = document.createElement('h5');
                h5.className = 'card-title';
                h5.textContent = user.name || '';

                // Párrafo with email
                const pEmail = document.createElement('p');
                pEmail.className = 'card-text';
                pEmail.textContent = user.email || '';

                // Párrafo con ciudad
                const pCity = document.createElement('p');
                pCity.className = 'card-text text-muted';
                pCity.textContent = (user.address && user.address.city) ? user.address.city : '';

                // Botón eliminar
                const btnEliminar = document.createElement('button');
                btnEliminar.type = 'button';
                btnEliminar.className = 'btn btn-sm btn-danger';
                btnEliminar.textContent = 'Eliminar tarjeta';
                btnEliminar.style.marginTop = '8px';
                btnEliminar.addEventListener('click', () => card.remove());

                // Montar tarjeta
                cardBody.appendChild(h5);
                cardBody.appendChild(pEmail);
                cardBody.appendChild(pCity);
                cardBody.appendChild(btnEliminar);
                card.appendChild(cardBody);
                galeria.appendChild(card);
            });
            mensaje.textContent = `Mostrados ${bizUsers.length} usuarios con website .biz.`;
        } catch (err) {
            console.error(err);
            mensaje.textContent = 'Error al cargar datos. Mira la consola.';
        }
    }

    // Asignar evento al botón
    btnCargar.addEventListener('click', cargarBiz);

    // Montar estructura
    cont.appendChild(titulo);
    cont.appendChild(btnCargar);
    cont.appendChild(mensaje);
    cont.appendChild(galeria);
    document.body.appendChild(cont);
};

// Ejercicio 20: Mini visor de usuarios (final)
function ejercicio20(){
    // Evitar duplicados
    if (document.getElementById('e20-container')) return;

    // Crear contenedor principal
    const cont = document.createElement('div');
    cont.id = 'e20-container';
    cont.style.margin = '12px 0';
    cont.style.padding = '8px';
    cont.style.border = '1px solid #ddd';
    cont.style.background = '#f6f8fa';

    // Crear título
    const titulo = document.createElement('h4');
    titulo.textContent = 'Ejercicio 20: Visor de usuarios';
    titulo.style.marginTop = '0';

    // Crear barra de controles
    const controles = document.createElement('div');
    controles.style.display = 'flex';
    controles.style.gap = '8px';
    controles.style.alignItems = 'center';

    // Botón cargar usuarios
    const btnCargar = document.createElement('button');
    btnCargar.type = 'button';
    btnCargar.className = 'btn btn-sm btn-primary';
    btnCargar.textContent = 'Cargar usuarios';

    // Botón clonar (inicialmente desactivado)
    const btnClonar = document.createElement('button');
    btnClonar.type = 'button';
    btnClonar.className = 'btn btn-sm btn-secondary';
    btnClonar.textContent = 'Clonar último usuario';
    btnClonar.disabled = true;

    // Div para mensajes
    const mensaje = document.createElement('div');
    mensaje.style.marginLeft = '8px';
    mensaje.style.color = '#333';
    mensaje.textContent = '';

    // Contenedor flex para tarjetas
    const galeria = document.createElement('div');
    galeria.className = 'd-flex flex-wrap';
    galeria.style.gap = '12px';
    galeria.style.marginTop = '12px';

    // Función para crear tarjeta de usuario
    function crearTarjetaUsuario(user, mark){
        // Crear tarjeta Bootstrap
        const card = document.createElement('div');
        card.className = 'card';
        card.style.width = '18rem';
        card.style.minWidth = '220px';

        // Crear cuerpo de la tarjeta
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Título con nombre
        const h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.textContent = user.name || 'Sin nombre';

        // Párrafo con email
        const pEmail = document.createElement('p');
        pEmail.className = 'card-text';
        pEmail.textContent = user.email || '';

        // Párrafo con ciudad
        const pCity = document.createElement('p');
        pCity.className = 'card-text text-muted';
        pCity.textContent = (user.address && user.address.city) ? user.address.city : '';

        // Botón eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.type = 'button';
        btnEliminar.className = 'btn btn-sm btn-danger btn-eliminar-e20';
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.style.marginTop = '8px';
        btnEliminar.addEventListener('click', () => card.remove());

        // Si hay marca (número), añadirla
        if (mark) {
            const badge = document.createElement('small');
            badge.style.display = 'block';
            badge.style.marginBottom = '6px';
            badge.style.color = '#666';
            badge.textContent = mark;
            cardBody.appendChild(badge);
        }

        // Montar tarjeta
        cardBody.appendChild(h5);
        cardBody.appendChild(pEmail);
        cardBody.appendChild(pCity);
        cardBody.appendChild(btnEliminar);
        card.appendChild(cardBody);

        // Añadir a galería y activar botón clonar
        galeria.appendChild(card);
        btnClonar.disabled = false;
        return card;
    }

    // Función para cargar usuarios
    async function cargarUsuarios(){
        mensaje.textContent = 'Cargando...';
        btnCargar.disabled = true;
        galeria.innerHTML = '';
        try {
            // Fetch a la API
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!resp.ok) throw new Error('Respuesta no OK: ' + resp.status);
            const users = await resp.json();
            
            // Verificar si hay datos
            if (!Array.isArray(users) || users.length === 0) {
                mensaje.textContent = 'No se han encontrado usuarios.';
                btnCargar.disabled = false;
                return;
            }

            // Crear tarjeta para cada usuario
            users.forEach((u, i) => crearTarjetaUsuario(u, `#${i+1}`));
            mensaje.textContent = `Cargados ${users.length} usuarios.`;
        } catch (err) {
            console.error(err);
            mensaje.textContent = 'Error al cargar usuarios. Mira la consola.';
        } finally {
            btnCargar.disabled = false;
        }
    }

    // Función para clonar último usuario
    function clonarUltimo(){
        // Obtener última tarjeta
        const ult = galeria.lastElementChild;
        if (!ult) return;
        
        // Clonar tarjeta completa
        const clon = ult.cloneNode(true);
        
        // Reasignar evento eliminar (no se clona con cloneNode)
        const btnEliminarClon = clon.querySelector('.btn-eliminar-e20');
        if (btnEliminarClon) {
            btnEliminarClon.addEventListener('click', () => clon.remove());
        } else {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'btn btn-sm btn-danger';
            btn.textContent = 'Eliminar';
            btn.style.marginTop = '8px';
            btn.addEventListener('click', () => clon.remove());
            const body = clon.querySelector('.card-body') || clon;
            body.appendChild(btn);
        }

        // Añadir marca de clon
        const bodyClon = clon.querySelector('.card-body');
        if (bodyClon) {
            const note = document.createElement('small');
            note.style.display = 'block';
            note.style.color = '#666';
            note.textContent = '(clon)';
            bodyClon.insertBefore(note, bodyClon.firstChild);
        }

        // Añadir clon a la galería
        galeria.appendChild(clon);
    }

    // Asignar eventos a los botones
    btnCargar.addEventListener('click', cargarUsuarios);
    btnClonar.addEventListener('click', clonarUltimo);

    // Montar estructura final
    controles.appendChild(btnCargar);
    controles.appendChild(btnClonar);
    controles.appendChild(mensaje);
    cont.appendChild(titulo);
    cont.appendChild(controles);
    cont.appendChild(galeria);
    document.body.appendChild(cont);
};