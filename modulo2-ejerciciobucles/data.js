const viajes = [
    {
      destino: 'París',
      pais: 'Francia',
      actividad: 'Visitar la Torre Eiffel',
      precio: 1200,
    },
    {
      destino: 'Tokio',
      pais: 'Japón',
      actividad: 'Explorar el barrio de Shibuya',
      precio: 1500,
    },
    {
      destino: 'Roma',
      pais: 'Italia',
      actividad: 'Recorrer el Coliseo y el Foro Romano',
      precio: 1100,
    },
    {
      destino: 'El Cairo',
      pais: 'Egipto',
      actividad: 'Visitar las Pirámides de Giza',
      precio: 1300,
    },
  ];

/*
EJERCICIO: Pintar los viajes en el HTML al cargar la página
-Traer la sección de viajes
-Funciones: 
    -una para pintar un objeto (article)
    -una para recorrer el array y pintar todos los objetos 
    -ejecutar al cargar la página la función que recorre el array
*/
const sectionViajes = document.querySelector('.js-viajes');

function pintarViaje(viaje){
    /* let claseCSS = '';
    if (viaje.precio > 1200){
        claseCSS = 'purple';   pero lo que es la clase hay que crearla como siempre en el css
    }
     con esto, podemos hacer lo mismo que con el ternario pero poniendo ${claseCSS} en vez de ${viaje.precio >1200 ? 'purple': ''}*/
    const article = `
    <article class="article ${viaje.precio >1200 ? 'purple': ''}"> 
        <h3>${viaje.destino}</h3>
        <p>${viaje.pais}</p>
        <p>${viaje.actividad}</p>
        <p>${viaje.precio}</p>
    </article>`;
    return article;
}
// si queremos poner una clase a algun objeto concreto, por ejemplo si supera un precio, lo podemos hacer con un ternario como se ve en la línea 40

function listaViaje(){ //no hace falta parámetro porque viajes es constante global y se puede acceder desde cualquier punto del código
    for (const unViaje of viajes){
        sectionViajes.innerHTML += pintarViaje(unViaje);
    }
}

listaViaje();