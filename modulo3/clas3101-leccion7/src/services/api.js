//ponemos js y no jsx xke aki solo vamos a poner funciones

const getDataApi = (search) =>{
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`) //return aquí para que nos devuelva lo de dentro del then
    .then(res => res.json())
    .then(data => {
        const cleanData = data.drinks.map((item)=> {
            return {
                id: item.idDrink,
                name: item.strDrink,
                category: item.strCategory,
                image: item. strDrinkThumb
            };
        });//aquí termina el map, el return de arriba es del map

        return cleanData; //aquí es el return del then, que es lo que nos ha devuelto el map
    })
};

export default getDataApi;

//esto se llama un módulo, se crea fichero independiente y se importa
//si tuviera dos funciones, se pondría export default (getDataApi, otraFuncion)