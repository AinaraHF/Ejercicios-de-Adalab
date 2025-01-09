'use strict';

//Seleccionar una raza de un select y pintar la imagen de la raza seleccionada
/*
1. Seleccionar los elementos del HTML
2. Escuchar evento sobre el Select
    - recoger el valor de la raza seleccionada
    - hacer la petición al servidor (devuelve un objeto con la url de la imagen)
        - pintar en el HTML la url de la img
*/

const select = document.querySelector('.js-select');
const image = document.querySelector('.js-breed');


function handleChange(){
    const breedSelected = select.value; // recogemos la selección
    fetch(`https://dog.ceo/api/breed/${breedSelected}/images/random`) 
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            image.src = data.message;
        });
}

select.addEventListener('change', handleChange);

