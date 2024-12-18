const actors = [
    {
      name: 'Emma Stone',
      city: 'Scottsdale',
      imageUrl:
        'https://static3.mujerhoy.com/www/multimedia/202401/26/media/cortadas/emma-stone-cambios-look-pelo-kuRH-U2101349567837EqH-1248x1248@MujerHoy.jpg',
      oscars: 0,
      films: ['Cruella', 'La la land'],
    },
    {
      name: 'Tom Hanks',
      city: 'Los Angeles',
      imageUrl:
        'https://phantom-elmundo.unidadeditorial.es/5627874518e19299c2674b63b01c1883/crop/0x0/1920x1280/resize/1200/f/jpg/assets/multimedia/imagenes/2023/10/02/16962448755282.jpg',
      oscars: 2,
      films: ['Naufrago', 'Forrest gump'],
    },
    {
      name: 'Meryl Streep',
      city: 'Nueva Yorks',
      imageUrl:
        'https://www.lanacion.com.ar/resizer/v2/meryl-streep-revelo-un-secreto-jamas-WTX46OFK25BURI3H7A7FSNXTK4.png?auth=82f0f675548ca2be92d8d24e605884cc94d7f31150cc254645db6cb6a4f54783&width=420&height=280&quality=70&smart=true',
      oscars: 3,
      films: ['Mamma mia', 'El diablo viste a la moda'],
    },
  ];


const button = document.querySelector('.js-btn');
const list = document.querySelector('.js-list');

const renderActor = (oneActor) => { //el parámetro es el objeto completo, porque si tuviera muchas propiedades sería un caos

    const li = `
    <li class= "js-actor">
        <img src="${oneActor.imageUrl}" alt="">
        <h3>${oneActor.name}</h3>
        <p>${oneActor.oscars} oscars</p>
        <ol>
            <li>${oneActor.films[0]}</li>
            <li>${oneActor.films[1]}</li>
        </ol>
    </li>`;
    return li;
}

const handleClickLi = (event) ==> {
    console.log('he hecho click en el actor');
    console.log(event.currentTarget);
    console.log(event.target);

}


const handleClick = () => { //en este caso no hace falta preventDefault, porque no se "reinicia" al pulsar
    list.innerHTML = 
    renderActor(actors[0]) + renderActor(actors[1]) + renderActor(actors[2]);
   
    const liArray = document.querySelectorAll('.js-actor'); //no puedo llamar esto si no aparece, por eso va aquí porque aparece cuando el click
    console.log(liArray);

    liArray[0].addEventListener('click', handleClickLi); // para escuchar eventos de algo que aún no se ha creado, no se puede, tiene que ser después de crearlo, por eso va aquí dentro
    liArray[1].addEventListener('click', handleClickLi);
    liArray[2].addEventListener('click', handleClickLi);
};

button.addEventListener('click', handleClick);

