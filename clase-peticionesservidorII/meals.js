'use strict';

let meals = [];

function getDataApi(){
    fetch ('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((response) => response.json())
        .then((data) => {
            meals = data.categories;
            localStorage.setItem('meals', JSON.stringify(meals));
        });
}

getDataApi()

//Se ejecuta al cargar la página

const mealsLS = localStorage.getItem('meals');
if(mealsLS){
    const mealsArray = JSON.parse(mealsLS);
    meals = mealsArray;
}else{
    getDataApi();
}

/*SOLICITUDES
Method
    get --> pedir datos
    post --> enviar datos
    put --> modificar datos
    delete --> eliminar datos
*/