/*
ARRAYS
- for "clasico"
- for-of
- for Each()

OBJETOS
- for-in ---> para recorrer un objeto

*/

const paises = ["españa", "francia", "portugal", "egipto", "china"];
/*console.log(paises[0]);
console.log(paises[1]);
console.log(paises[2]);
console.log(paises[3]);
console.log(paises[4]); //para que salgan todos los países por separado hay que elegir uno a uno, y para evitarlo usamos los bucles

/*
for "clasico" tiene siempre el siguiente formato
for (let i= 0; i < paises.length; i++)
primer parámetro SIEMPRE let pero = a la posición en la queremos que empiece, no tiene que ser siempre 0
segundo parámetro i de índice SIEMPRE < porque si ponemos =< se repetirá el bucle y el número de posiciones
tercer parámetro i++ -- i=i+1 -- i+=1, las tres opciones significan lo mismo, es para que se vaya sumando 1
*/
for(let i= 0; i < paises.length; i++){
    console.log(paises[i]); //ponemos dentro del for lo que queremos que se repita
}

const animals = ["tiburón", "tortuga", "manta"];
const list = document.querySelector('.js-list');

function pintarAnimal(animal){
    return `<li> ${animal}</li>`;
}

/*
for-of
creamos const singular, eg.: animal
*/
for(const animal of animals){
    //console.log(animal); para ver en consola
    //list.innerHTML += `<li> ${animal}</li>`; para que se muestre en la ul
    list.innerHTML += pintarAnimal(animal); //para que se muestre en la ul pero usando una función
}


