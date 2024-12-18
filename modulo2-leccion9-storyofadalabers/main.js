'use strict';

const adalabers = [
    {
        name: 'María',
        age: 29,
        job: 'diseñadora',
    },
    {
        name: 'Lucía',
        age: 31,
        job: 'ingeniera química',
    },
    {
        name: 'Susana',
        age: 34,
        job: 'periodista',
    },
    {
        name: 'Rocío',
        age: 25,
        job: 'actriz',
    },
    {
        name: 'Inmaculada',
        age: 21,
        job: 'diseñadora',
    }
];

function countAdalabers(){
    return adalabers.length;
};
console.log(countAdalabers());

function averageAge(){
    const totalAge = adalabers[0].age + adalabers[1].age + adalabers[2].age + adalabers[3].age + adalabers[4].age;
    return totalAge/5;
};
console.log(averageAge());

/*function theYoungest(){
    const minAge = adalabers[0].age, adalabers[1].age, adalabers[2].age, adalabers[3].age, adalabers[4].age;
    return minAge;
};

console.log(minAge());

function countDesigners(){
    return adalabers.job === 'diseñadora';
};
console.log(countDesigners());*/



