'use strict';

const students = [
    { name: "Ana", promo: "x", city: "Valencia", skills: ["HTML", "Grid"] },
    { name: "Silvia", promo: "x", city: "Madrid", skills: ["JS"] },
    { name: "Sara", promo: "x", city: "Barcelona", skills: ["React"] },
    { name: "Rebeca", promo: "x", city: "Sevilla", skills: ["HTML", "JS"] },
    { name: "Raquel", promo: "x", city: "Madrid", skills: ["Scrum", "Backend"] },
    { name: "Dolores", promo: "x", city: "Bilbao", skills: ["Backend", "MySQL"] },
];

const cities = ['madrid','bilbao','valencia','barcelona','sevilla'];
const selectCities = document.querySelector('.js-cities');
const ulStudent = document.querySelector('.js-list');


// crear las option de un select de forma dinámica con las ciudades
for (const city of cities) {
    selectCities.innerHTML += `<option value="${city}">${city}</option>`;
}

// buscar a las estudiantes por ciudad

function renderStudents(list){
    ulStudent.innerHTML ='';
    for (const item of list) {
        ulStudent.innerHTML += `<li>${item.name}</li>`;
    }
};

function handleChange(ev){
    const valueSelected = ev.currentTarget.value;
    const filterStudents = students.filter((student) => student.city.toLowerCase() === valueSelected.toLocaleLowerCase()
);
    renderStudents(filterStudents);
};

selectCities.addEventListener('change', handleChange)