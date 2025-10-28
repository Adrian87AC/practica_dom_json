//Ejercicio 1: Acceso al DOM básico

const { createElement } = require("react");

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
(function variosElementos(){
    let textos = document.getElementsByClassName('texto');
    if(textos.length < 3){
        for(let i = textos.length; i < 3; i++){
            const p = document.createElement('p');
            p.className = 'texto';
            p.innerText = 'Párrafo ' + (i + 1) + ' (creado por JS)';
            document.body.appendChild(p);
        }
        textos = document.getElementsByClassName('texto');
    }
    for (let i = 0; i < textos.length; i++){
        textos[i].style.backgroundColor = 'ligthgray';
        textos[i].style.padding = '6px';
        textos[i].style.margin = '4px 0';
    }
})();




//Ejercicio 3: Sección con querySelector
/*
Usa querySelector para seleccionar el primer <div> con clase .caja y cambia su borde y
fondo con style.
*/
function seleccionarCaja(){
    const caja = document.querySelector('.caja');
    if(!caja) return;
    caja.style.border = '2px solid #333';
    caja.style.backgroundColor = '#f7f7f7';
    caja.style.padding = '8px';
};

//Ejercicio 4: querySelectorAll y forEach
/*
Crea tres botones con clase btn-dom.
Recógelos con querySelectorAll y cambia el texto de todos ellos a “DOM listo ”.
*/
function botonesDOM(){
    let botones = document.querySelectorAll('.btm-dom');
    if(botones.length < 3){
        for(let i = botones.length; i < 3; i++){
            const btn = document.createElement('button');
            btn.className = 'btn-dom btn btn-secondary';
            btn.type = 'button';
            btn.innerText = 'Botón ' + (i + 1);
            btn.style.margin = '4px';
            document.body.appendChild(btn);
        }
        botones = document.querySelectorAll('.btn-dom');
    }
    botones.forEach(b => b.innerText = 'DOM listo ');
};

//Ejercicio 5: Comparación entre colecciones vivas y estáticas
/*
Crea una lista <ul id="lista"> con dos <li>.
Muestra por consola la diferencia entre getElementsByTagName("li") (viva) y
querySelectorAll("li") (estática) al agregar un nuevo elemento.
*/
function compararColecciones(){
    let lista = document.getElementById('lista');
    if (!lista){
        lista = document.createElement('ul');
        lista.id = 'lista';
        const li1 = document.createElement('li');
        li1.textContent = 'Elemento 1';
        const li2 = document.createElement('li');
        li2.textContent = 'Elemento 2';
        lista.appendChild(li1);
        lista.appendChild(li2);
        document.body.appendChild(lista);
    }
    const vivos = lista.getElementsByTagName('li');
    const estaticos = lista.querySelectorAll('li');

    console.log('Antes de añadir: getElementByTagName (viva) = ', vivos.length, ' ,querySelectorAll (estática) = ', estaticos.length);

    const nuevo = document.createElement('li');
    nuevo.textContent = 'Elemento 3 (añadido)';
    lista.appendChild(nuevo);

    console.log('Después de añadir: getElementsByTagsName (viva) =', vivos.length, ', querySelectorAll (estática) =', estaticos.length);
    console.log('Contenido colección viva: ', Array.from(vivos).map(n=> n.textContent));
    console.log('Contenido colección estática: ', Array.from(estaticos).map(n=> n.textContent));
};

//Ejercicio 6: Crear elementos dinámicamente
/*Usa createElement() para crear un <p> con texto "Creado dinámicamente" y añádelo al
body con appendChild().*/
function crearParrafoDinamico(){
    if(document.getElementById('parrafo-dinamico-e6'))
        return;
    const p = document.createElement('p');
    p.id = 'parrafo-dinamico-e6';
    p.textContent = 'Creado dinámicamente';
    document.body.appendChild('p');
};
//Ejercicio 7:Crear nodos de texto
/*Crea un <div id="contenedor">.
Genera un nodo de texto con createTextNode() y añádelo dentro del div.*/
function crearNodoTexto(){
    let cont = document.getElementById('contenedor');
    if(!cont){
        cont = document.createElement('div');
        cont.id = 'contenedor';
    }
    if(cont.dataset.ej7 == 'true')
        return;
    const nodoTexto = document.createTextNode('Texto creado dinamicamente con createTextNode()');
    cont.appendChild(nodoTexto);
    cont.dataset.ej7 = 'true';
};
//Ejercicio 8: Añadir atributos a un elemento
/*Crea una imagen con createElement("img") y añade atributos con setAttribute():
● src → una URL de imagen de prueba.
● alt → “Imagen generada por JS”.
*/
function crearImagenEj8(){
    if(document.getElementById('imagen'))
        return;
    const imagen = document.createElement('imagen');
    imagen.id = 'imagen';
    imagen.setAttribute('src', '');
    imagen.setAttribute('alt', 'imagen generada');
    imagen.className = 'img-fluid';
    imagen.style.display = 'block';
    imagen.style.margin = '8px 0';

    document.body.appendChild('imagen');
};

//Ejercicio 9: Crear estructura completa
/*Crea dinámicamente una tarjeta de Bootstrap (card) con:
● Título (h5)
● Texto (p)
● Botón (button.btn.btn-primary)
Todos generados desde JavaScript y añadidos dentro de un div.container.
*/
function crearTarjetaEj9(){
    if(document.getElementById('container'))
        return;
    const container = document.createElement('div');
    container.id = 'container';
    container.className = 'container';
    container.style.marginTop = '12px';

    const row = document.createElement('div');
    row.className = 'row';

    const col = document.createElement('div');
    col.className = 'col';

    const card = document.createElement('div');
    card.className = 'card';

    const cardBody = document.createElement('div');
        cardBody.className = 'card';
    
    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = 'Titulo de la tarjeta';

    const texto = document.createElement('p');
    texto.className = 'card-text';
    texto.textContent = "Este es un texto";

    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'btn btn-primary';
    boton.textContent = 'Acción';
    boton.addEventListener('click', function(){
        console.log('Boton de la tarjeta pulsado');
        title.textContent = 'Acción realizada';
    });

    cardBody.appendChild(title);
    cardBody.appendChild(texto);
    cardBody.appendChild(boton);
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);
    container.appendChild(row);

    document.body.appendChild(container);
};

//Ejercicio 10: Insertar elementos en distintas posiciones
/*Crea una lista y usa:
● append() para añadir al final,
● prepend() para añadir al inicio,
● before() y after() para colocar nuevos elementos fuera del <ul>.
*/
function ejercicio10(){
    if(document.getElementById('container'))
        return;
    const cont = document.createElement('div');
    cont.id = 'container';
    cont.style.margin = '12px 0';
    cont.style.padding = '8px';
    cont.style.border = '1px solid #ddd';
    cont.style.background = '#fbfbfb';

    const titulo = document.createElement('h4');
    titulo.textContent = 'Insertar cambios';
    titulo.style.marginTop = '0';

    const lista = document.createElement('ul');
    lista.id = 'lista';
    lista.style.paddingLeft = '20px';
    for(let i = 1; i <= 2; i++){
        const li = document.createElement('li');
        li.textContent = 'Elemento ' + i;
        lista.appendChild(li);
    }

    const botonesDiv = document.createElement('div');
    botonesDiv.style.margin = '8px 0';
    botonesDiv.style.display = 'flex';
    botonesDiv.style.gap = '6px';
    const crearBoton = (texto) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'btn btn-sm btn-outline-primary';
        b.textContent = texto;
        return b;
    };

    const btnAppend = crearBoton('append (al final)');
    const btnPrepend = crearBoton('prepend (al inicio)');
    const btnBefore = crearBoton('before (fuera, antes del ul)');
    const btnAfter = crearBoton('after (fuera, después del ul)');

    botonesDiv.appendChild(btnAppend);
    botonesDiv.appendChild(btnPrepend);
    botonesDiv.appendChild(btnBefore);
    botonesDiv.appendChild(btnAfter);

    let contadorLi = 3;
    let contadorFueraAntes = 1;
    let contadorFueraDespues = 1;

    btnAppend.addEventListener('click', () =>{
        const li = document.createElement('li');
        li.textContent = 'Elemento ' + (contadorLi++);
        lista.append(li);
    });

    btnPrepend.addEventListener('click', () =>{
        const li = document.createElement('li');
        li.textContent = 'Elemento' + (contadorLi++);
        lista.prepend(li);
    });

    btnBefore.addEventListener('click', () =>{
        const p = document.createElement('p');
        p.textContent = 'Elemento fuera (after) ' + (contadorFueraDespues++);
        p.style.margin = '6px 0';
        p.style.padding = '6px';
        p.style.background = '#efe';
        lista.after(p);
    });
    cont.appendChild(titulo);
    cont.appendChild(botonesDiv);
    cont.appendChild(lista);
    document.body.appendChild(cont);
};


//Ejercicio 11: Reemplazar y eliminar
/*Crea un párrafo <p> y un botón “Eliminar”.
Al hacer clic, usa remove() para eliminar el párrafo y muestra un mensaje por consola.
Luego, crea un segundo botón “Reemplazar” que use replaceWith() para cambiar un
elemento por otro.*/
function ejercicio11(){
    if(document.getElementById('e11'))
        return;

    const cont = document.createElement('div');
    cont.id = 'e11';
    cont.style.margin = '12px 0';
    cont.style.padding = '8px';
    cont.style.border = '1px solid #ddd';
    cont.style.background = '#fff9f0';

    const titulo = document.createElement('h4');
    titulo.textContent = 'Reemplazar y eliminar';
    titulo.style.marginTop = '0';

    const parrafo = document.createElement('p');
    parrafo.id = 'parrafo';
    parrafo.textContent = 'Este puede ser eliminado o reemplazado. ';
    parrafo.style.padding = '6px';
    parrafo.style.background = '#f0f8ff';

    const btnEliminar = document.createElement('button');
    btnEliminar.type = 'button';
    btnEliminar.className = 'btn-btn-sm btn-danger';
    btnEliminar.style.marginRight = '6px';
    btnEliminar.addEventListener('click', function(){
        const p = document.getElementById('parrafo');
        if(!p){
            console.log('Ya no existe');
            return;
        }
        p.remove();
        console.log('Eliminado usando remove()');
    });

    const btnReemplazar = document.createElement('button');
    btnReemplazar.type = 'button';
    btnReemplazar.className = 'btn btn-sm btn-warning';
    btnReemplazar.textContent = 'Reemplazar';
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

    cont.appendChild(titulo);
    cont.appendChild(parrafo);
    cont.appendChild(btnEliminar);
    cont.appendChild(btnReemplazar);
    document.body.appendChild(cont);
};

//Ejercicio 12: Clonar elementos
/*Crea una tarjeta de Bootstrap con una imagen y texto.
Añade un botón “Clonar tarjeta” que use cloneNode(true) para duplicar la tarjeta y cambiar
el texto del clon.
*/
function ejercicio12(){
    if(document.getElementById('e12'))
        return;
    const cont = document.createElement('div');
    cont.id = 'e12';
    cont.style.margin = '12px 0';

    const titulo = document.createElement('h4');
    titulo.textContent = 'Clonar tarjeta';
    titulo.style.marginTop = '0';

    const card = createElement('div');
    card.className = 'card';
    card.id = 'e12';
    card.style.width = '18rem';

    const imagen = document.createElement('imagen');
    imagen.className = 'card-img-top';
    imagen.alt = 'Ejemplo';
    imagen.src = "";

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = 'Tarjeta original';

     const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = 'Texto de ejemplo dentro de la tarjeta.';

    // Botón para clonar
    const btnClonar = document.createElement('button');
    btnClonar.type = 'button';
    btnClonar.className = 'btn btn-sm btn-primary';
    btnClonar.textContent = 'Clonar tarjeta';
    btnClonar.style.marginTop = '8px';

    // Montaje card original
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(img);
    card.appendChild(cardBody);

    // Contenedor de tarjetas (original + clones)
    const galeria = document.createElement('div');
    galeria.id = 'galeria-e12';
    galeria.style.display = 'flex';
    galeria.style.flexWrap = 'wrap';
    galeria.style.gap = '12px';
    galeria.style.marginTop = '8px';

    // Añadimos la tarjeta original dentro de la galería
    galeria.appendChild(card);

    // Lógica para clonar
    let contadorClones = 1;
    btnClonar.addEventListener('click', function(){
        const original = document.getElementById('card-e12');
        if (!original) return;
        const clon = original.cloneNode(true); // true para clonar hijos
        // Evitar IDs duplicados
        clon.id = 'card-e12-clone-' + contadorClones;
        // Actualizar título y texto del clon
        const tituloClon = clon.querySelector('.card-title');
        const textoClon = clon.querySelector('.card-text');
        if (tituloClon) tituloClon.textContent = `Tarjeta clon ${contadorClones}`;
        if (textoClon) textoClon.textContent = `Este es el clon número ${contadorClones}.`;
        // Opcional: añadir botón para eliminar solo en el clon
        const btnEliminarClon = document.createElement('button');
        btnEliminarClon.type = 'button';
        btnEliminarClon.className = 'btn btn-sm btn-danger';
        btnEliminarClon.textContent = 'Eliminar clon';
        btnEliminarClon.style.display = 'block';
        btnEliminarClon.style.marginTop = '6px';
        btnEliminarClon.addEventListener('click', function(){
            clon.remove();
        });
        // Insertar el botón de eliminar dentro del body del clon (si existe)
        const bodyClon = clon.querySelector('.card-body') || clon;
        bodyClon.appendChild(btnEliminarClon);

        galeria.appendChild(clon);
        contadorClones++;
    });

    // Montaje final
    cont.appendChild(titulo);
    cont.appendChild(btnClonar);
    cont.appendChild(galeria);
    document.body.appendChild(cont);
};


//Ejercicio 13: Crear lista dinámica con botón
/*Crea un botón “Agregar elemento” que añada un nuevo <li> a una lista cada vez que se
pulsa.
*/
function ejercicio13(){
    if (document.getElementById('e13-container')) return; // evitar duplicados

    const cont = document.createElement('div');
    cont.id = 'e13-container';
    cont.style.margin = '12px 0';
    cont.style.padding = '8px';
    cont.style.border = '1px solid #ddd';
    cont.style.background = '#f8f9fa';

    const titulo = document.createElement('h4');
    titulo.textContent = 'Ejercicio 13: Lista dinámica';
    titulo.style.marginTop = '0';

    const btnAgregar = document.createElement('button');
    btnAgregar.type = 'button';
    btnAgregar.id = 'btn-agregar-e13';
    btnAgregar.className = 'btn btn-sm btn-primary';
    btnAgregar.textContent = 'Agregar elemento';
    btnAgregar.style.marginBottom = '8px';

    const lista = document.createElement('ul');
    lista.id = 'lista-e13';
    lista.className = 'list-group';
    lista.style.marginTop = '8px';

    // contador para numerar los elementos
    let contador = 1;

    btnAgregar.addEventListener('click', () => {
        const li = document.createElement('li');
        li.className = 'list-group-item item';
        li.textContent = 'Elemento ' + (contador++);
        lista.appendChild(li);
        // opcional: hacer scroll hasta el último elemento
        li.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    cont.appendChild(titulo);
};
//Ejercicio 14: Eliminar último elemento
/*Usa removeChild() o lastElementChild.remove() para eliminar el último elemento de la lista
creada en el ejercicio anterior.
*/
(function ejercicio14(){
    if (document.getElementById('e14-container')) return; // evitar duplicados

    const cont = document.createElement('div');
    cont.id = 'e14-container';
    cont.style.margin = '12px 0';
    cont.style.padding = '8px';
    cont.style.border = '1px solid #ddd';
    cont.style.background = '#f1f7ff';

    const titulo = document.createElement('h4');
    titulo.textContent = 'Ejercicio 14: Eliminar último elemento';
    titulo.style.marginTop = '0';

    // Asegurarse de que exista la lista usada en el ejercicio 13
    let lista = document.getElementById('lista-e13');
    if (!lista) {
        lista = document.createElement('ul');
        lista.id = 'lista-e13';
        lista.style.marginTop = '8px';
        // crear algunos elementos de ejemplo
        for (let i = 1; i <= 3; i++) {
            const li = document.createElement('li');
            li.className = 'list-group-item item';
            li.textContent = 'Elemento de ejemplo ' + i;
            lista.appendChild(li);
        }
    }

    const botonesDiv = document.createElement('div');
    botonesDiv.style.marginTop = '8px';
    botonesDiv.style.display = 'flex';
    botonesDiv.style.gap = '8px';

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
        // removeChild necesita el nodo hijo como argumento
        lst.removeChild(lst.lastElementChild);
        console.log('Eliminado usando removeChild()');
    });

    botonesDiv.appendChild(btnRemove);
    botonesDiv.appendChild(btnRemoveChild);

    cont.appendChild(titulo);
    cont.appendChild(botonesDiv);
    cont.appendChild(lista);

    document.body.appendChild(cont);
})();
//Ejercicio 15: Recorrer colección y modificar
/*Selecciona todos los elementos de una lista con querySelectorAll(".item")
Usa forEach() para numerarlos automáticamente:
Ejemplo: Elemento 1, Elemento 2, Elemento 3...
*/
function ejercicio15(){
    const items = document.querySelectorAll('.item');
    if(!items || items.length === 0)
        return;
    items.forEach(Element, index) =>{
        Element.textContent = `Elemento $ {index + 1}`;
    }
};
//Ejercicio 16: Crear una galería con JSON local
/*Crea un array JSON con varios objetos:
const imagenes = [
{ titulo: "Montaña", url: "https://via.placeholder.com/150/1" },
{ titulo: "Lago", url: "https://via.placeholder.com/150/2" },
{ titulo: "Bosque", url: "https://via.placeholder.com/150/3" }
];
Recórrelo con forEach() y genera una galería Bootstrap (card por imagen).
*/
(function ejercicio16(){
    if (document.getElementById('e16-container')) return;

    const imagenes = [
        { titulo: "Montaña", url: "https://via.placeholder.com/300x200?text=Montaña" },
        { titulo: "Lago", url: "https://via.placeholder.com/300x200?text=Lago" },
        { titulo: "Bosque", url: "https://via.placeholder.com/300x200?text=Bosque" },
        { titulo: "Ciudad", url: "https://via.placeholder.com/300x200?text=Ciudad" }
    ];

    const cont = document.createElement('div');
    cont.id = 'e16-container';
    cont.className = 'container';
    cont.style.margin = '12px 0';

    const titulo = document.createElement('h4');
    titulo.textContent = 'Ejercicio 16: Galería desde JSON local';
    titulo.style.marginTop = '0';
    cont.appendChild(titulo);

    const row = document.createElement('div');
    row.className = 'row';

    imagenes.forEach((imgObj, index) => {
        const col = document.createElement('div');
        col.className = 'col-sm-6 col-md-4';
        col.style.marginBottom = '12px';

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = imgObj.url;
        img.alt = imgObj.titulo;
        img.style.objectFit = 'cover';
        img.style.height = '180px';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.textContent = imgObj.titulo;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn-sm btn-primary';
        btn.textContent = 'Ver';
        btn.addEventListener('click', () => {
            const w = window.open('', '_blank');
            w.document.writeln('<title>' + imgObj.titulo + '</title>');
            w.document.writeln('<img src="' + imgObj.url + '" alt="' + imgObj.titulo + '" style="max-width:100%;height:auto;display:block;margin:16px auto;">');
        });

        cardBody.appendChild(h5);
        cardBody.appendChild(btn);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
    });

    cont.appendChild(row);
    document.body.appendChild(cont);
})();

//Ejercicio 17: Mostrar datos de API JSONPlaceholder
/*Usa fetch("https://jsonplaceholder.typicode.com/users")
Convierte la respuesta con .json()
Muestra los name y email de cada usuario en una lista <ul> generada dinámicamente.
*/
(function ejercicio17(){
    if (document.getElementById('e17-container')) return; // evitar duplicados

    const cont = document.createElement('div');
    cont.id = 'e17-container';
    cont.style.margin = '12px 0';
    cont.style.padding = '8px';
    cont.style.border = '1px solid #ddd';
    cont.style.background = '#f9f9f9';

    const titulo = document.createElement('h4');
    titulo.textContent = 'Ejercicio 17: Cargar usuarios (JSONPlaceholder)';
    titulo.style.marginTop = '0';

    const btnCargar = document.createElement('button');
    btnCargar.type = 'button';
    btnCargar.id = 'btn-cargar-usuarios';
    btnCargar.className = 'btn btn-sm btn-primary';
    btnCargar.textContent = 'Cargar usuarios';

    const mensaje = document.createElement('div');
    mensaje.id = 'msg-e17';
    mensaje.style.marginTop = '8px';
    mensaje.style.color = '#333';
    mensaje.textContent = '';

    const lista = document.createElement('ul');
    lista.id = 'lista-usuarios-e17';
    lista.style.marginTop = '8px';
    lista.style.paddingLeft = '20px';

    async function cargarUsuarios() {
        mensaje.textContent = 'Cargando...';
        lista.innerHTML = '';
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!resp.ok) throw new Error('Error en la respuesta: ' + resp.status);
            const users = await resp.json();
            if (!Array.isArray(users) || users.length === 0) {
                mensaje.textContent = 'No se han encontrado usuarios.';
                return;
            }
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

    btnCargar.addEventListener('click', cargarUsuarios);

    cont.appendChild(titulo);
    cont.appendChild(btnCargar);
    cont.appendChild(mensaje);
    cont.appendChild(lista);
    document.body.appendChild(cont);
})();

//Ejercicio 18: Mostrar datos anidados de JSON
/*Usando la misma API, muestra una tabla con name, email y address.city de cada usuario.
Usa table, thead y tbody generados con createElement().
*/
(function ejercicio18(){
    if (document.getElementById('e18-container')) return; // evitar duplicados

    const cont = document.createElement('div');
    cont.id = 'e18-container';
    cont.style.margin = '12px 0';
    cont.style.padding = '8px';
    cont.style.border = '1px solid #ddd';
    cont.style.background = '#ffffff';

    const titulo = document.createElement('h4');
    titulo.textContent = 'Ejercicio 18: Tabla de usuarios (name, email, city)';
    titulo.style.marginTop = '0';

    const btnCargar = document.createElement('button');
    btnCargar.type = 'button';
    btnCargar.id = 'btn-cargar-e18';
    btnCargar.className = 'btn btn-sm btn-primary';
    btnCargar.textContent = 'Cargar tabla';

    const mensaje = document.createElement('div');
    mensaje.id = 'msg-e18';
    mensaje.style.marginTop = '8px';
    mensaje.style.color = '#333';

    const tabla = document.createElement('table');
    tabla.id = 'tabla-e18';
    tabla.className = 'table table-striped';
    tabla.style.marginTop = '8px';
    tabla.style.width = '100%';

    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');
    ['Nombre', 'Email', 'Ciudad'].forEach(h => {
        const th = document.createElement('th');
        th.scope = 'col';
        th.textContent = h;
        headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    tabla.appendChild(thead);

    const tbody = document.createElement('tbody');
    tabla.appendChild(tbody);

    async function cargarTabla() {
        mensaje.textContent = 'Cargando...';
        tbody.innerHTML = '';
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!resp.ok) throw new Error('Respuesta no OK: ' + resp.status);
            const users = await resp.json();
            if (!Array.isArray(users) || users.length === 0) {
                mensaje.textContent = 'No se encontraron usuarios.';
                return;
            }
            users.forEach(user => {
                const tr = document.createElement('tr');

                const tdName = document.createElement('td');
                tdName.textContent = user.name || '';
                tr.appendChild(tdName);

                const tdEmail = document.createElement('td');
                tdEmail.textContent = user.email || '';
                tr.appendChild(tdEmail);

                const tdCity = document.createElement('td');
                // address puede ser anidado; comprobamos seguridad
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

    btnCargar.addEventListener('click', cargarTabla);

    cont.appendChild(titulo);
    cont.appendChild(btnCargar);
    cont.appendChild(mensaje);
    cont.appendChild(tabla);
    document.body.appendChild(cont);
})();

//Ejercicio 19: Filtrar y mostrar datos
/*Filtra los usuarios cuya dirección termine en .biz y muéstralos en tarjetas Bootstrap.
*/
(function ejercicio19(){
    if (document.getElementById('e19-container')) return;

    const cont = document.createElement('div');
    cont.id = 'e19-container';
    cont.style.margin = '12px 0';
    cont.style.padding = '8px';
    cont.style.border = '1px solid #ddd';
    cont.style.background = '#fafafa';

    const titulo = document.createElement('h4');
    titulo.textContent = 'Ejercicio 19: Usuarios con website .biz';
    titulo.style.marginTop = '0';

    const btnCargar = document.createElement('button');
    btnCargar.type = 'button';
    btnCargar.className = 'btn btn-sm btn-primary';
    btnCargar.textContent = 'Cargar usuarios .biz';

    const mensaje = document.createElement('div');
    mensaje.style.marginTop = '8px';
    mensaje.style.color = '#333';

    const galeria = document.createElement('div');
    galeria.className = 'd-flex flex-wrap';
    galeria.style.gap = '12px';
    galeria.style.marginTop = '8px';

    async function cargarBiz() {
        mensaje.textContent = 'Cargando...';
        galeria.innerHTML = '';
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!resp.ok) throw new Error('Respuesta no OK: ' + resp.status);
            const users = await resp.json();
            const bizUsers = (Array.isArray(users) ? users : []).filter(u => u.website && u.website.toLowerCase().endsWith('.biz'));
            if (bizUsers.length === 0) {
                mensaje.textContent = 'No se encontraron usuarios con website .biz.';
                return;
            }
            bizUsers.forEach(user => {
                const card = document.createElement('div');
                card.className = 'card';
                card.style.width = '18rem';
                card.style.minWidth = '220px';

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const h5 = document.createElement('h5');
                h5.className = 'card-title';
                h5.textContent = user.name || '';

                const pEmail = document.createElement('p');
                pEmail.className = 'card-text';
                pEmail.textContent = user.email || '';

                const pCity = document.createElement('p');
                pCity.className = 'card-text text-muted';
                pCity.textContent = (user.address && user.address.city) ? user.address.city : '';

                const btnEliminar = document.createElement('button');
                btnEliminar.type = 'button';
                btnEliminar.className = 'btn btn-sm btn-danger';
                btnEliminar.textContent = 'Eliminar tarjeta';
                btnEliminar.style.marginTop = '8px';
                btnEliminar.addEventListener('click', () => card.remove());

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

    btnCargar.addEventListener('click', cargarBiz);

    cont.appendChild(titulo);
    cont.appendChild(btnCargar);
    cont.appendChild(mensaje);
    cont.appendChild(galeria);
    document.body.appendChild(cont);
})();

//Ejercicio 20: Ejercicio final: mini “visor de usuarios”
/*Combina todo lo aprendido:
1. Un botón “Cargar usuarios”.
2. Al pulsarlo, realiza un fetch() a https://jsonplaceholder.typicode.com/users.
3. Muestra tarjetas (card) con nombre, correo, y ciudad.
4. Incluye un botón dentro de cada tarjeta para eliminarla del DOM.
5. Incluye otro botón general para clonar el último usuario mostrado.
Usa createElement(), appendChild(), remove(), cloneNode(), y Bootstrap para los estilos.
*/
(function ejercicio20(){
    if (document.getElementById('e20-container')) return;

    const cont = document.createElement('div');
    cont.id = 'e20-container';
    cont.style.margin = '12px 0';
    cont.style.padding = '8px';
    cont.style.border = '1px solid #ddd';
    cont.style.background = '#f6f8fa';

    const titulo = document.createElement('h4');
    titulo.textContent = 'Ejercicio 20: Visor de usuarios';
    titulo.style.marginTop = '0';

    const controles = document.createElement('div');
    controles.style.display = 'flex';
    controles.style.gap = '8px';
    controles.style.alignItems = 'center';

    const btnCargar = document.createElement('button');
    btnCargar.type = 'button';
    btnCargar.className = 'btn btn-sm btn-primary';
    btnCargar.textContent = 'Cargar usuarios';

    const btnClonar = document.createElement('button');
    btnClonar.type = 'button';
    btnClonar.className = 'btn btn-sm btn-secondary';
    btnClonar.textContent = 'Clonar último usuario';
    btnClonar.disabled = true;

    const mensaje = document.createElement('div');
    mensaje.style.marginLeft = '8px';
    mensaje.style.color = '#333';
    mensaje.textContent = '';

    controles.appendChild(btnCargar);
    controles.appendChild(btnClonar);
    controles.appendChild(mensaje);

    const galeria = document.createElement('div');
    galeria.className = 'd-flex flex-wrap';
    galeria.style.gap = '12px';
    galeria.style.marginTop = '12px';

    // Crea tarjeta de usuario y la añade a la galería.
    function crearTarjetaUsuario(user, mark){
        const card = document.createElement('div');
        card.className = 'card';
        card.style.width = '18rem';
        card.style.minWidth = '220px';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.textContent = user.name || 'Sin nombre';

        const pEmail = document.createElement('p');
        pEmail.className = 'card-text';
        pEmail.textContent = user.email || '';

        const pCity = document.createElement('p');
        pCity.className = 'card-text text-muted';
        pCity.textContent = (user.address && user.address.city) ? user.address.city : '';

        const btnEliminar = document.createElement('button');
        btnEliminar.type = 'button';
        btnEliminar.className = 'btn btn-sm btn-danger btn-eliminar-e20';
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.style.marginTop = '8px';
        btnEliminar.addEventListener('click', () => card.remove());

        if (mark) {
            const badge = document.createElement('small');
            badge.style.display = 'block';
            badge.style.marginBottom = '6px';
            badge.style.color = '#666';
            badge.textContent = mark;
            cardBody.appendChild(badge);
        }

        cardBody.appendChild(h5);
        cardBody.appendChild(pEmail);
        cardBody.appendChild(pCity);
        cardBody.appendChild(btnEliminar);
        card.appendChild(cardBody);

        galeria.appendChild(card);
        btnClonar.disabled = false;
        return card;
    }

    async function cargarUsuarios(){
        mensaje.textContent = 'Cargando...';
        btnCargar.disabled = true;
        galeria.innerHTML = '';
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!resp.ok) throw new Error('Respuesta no OK: ' + resp.status);
            const users = await resp.json();
            if (!Array.isArray(users) || users.length === 0) {
                mensaje.textContent = 'No se han encontrado usuarios.';
                btnCargar.disabled = false;
                return;
            }
            users.forEach((u, i) => crearTarjetaUsuario(u, `#${i+1}`));
            mensaje.textContent = `Cargados ${users.length} usuarios.`;
        } catch (err) {
            console.error(err);
            mensaje.textContent = 'Error al cargar usuarios. Mira la consola.';
        } finally {
            btnCargar.disabled = false;
        }
    }

    // Clona la última tarjeta visible y la añade con marca "(clon)"
    function clonarUltimo(){
        const ult = galeria.lastElementChild;
        if (!ult) return;
        const clon = ult.cloneNode(true);
        // Al clonar no se copian los manejadores de eventos; reasignamos el botón eliminar.
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
        // Añadir una pequeña indicación al clon
        const bodyClon = clon.querySelector('.card-body');
        if (bodyClon) {
            const note = document.createElement('small');
            note.style.display = 'block';
            note.style.color = '#666';
            note.textContent = '(clon)';
            bodyClon.insertBefore(note, bodyClon.firstChild);
        }
        galeria.appendChild(clon);
    }

    btnCargar.addEventListener('click', cargarUsuarios);
    btnClonar.addEventListener('click', clonarUltimo);

    cont.appendChild(titulo);
    cont.appendChild(controles);
    cont.appendChild(galeria);
    document.body.appendChild(cont);
})();