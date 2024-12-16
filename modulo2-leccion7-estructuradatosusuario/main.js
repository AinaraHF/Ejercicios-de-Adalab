'use strict';

const user= {
    job: 'developer',
};

user.firstName = 'Ian';
user.lastName = 'Jones';
user.age = 37;
user.job = 'developer'; 
user.firstName = 'Charles';
user.age = 38;
console.log(user.age);

//al haber puesto Charles y 38 coge esos nuevos valores