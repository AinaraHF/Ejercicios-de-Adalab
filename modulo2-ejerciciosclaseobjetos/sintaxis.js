/*
Tipos de datos:
--Primitivos -simples
    1. String --> "algo"
    2. Número --> 25
    3. Booleano --> true/false
    4. Undefined --> se crea una variable sin un valor definido
    5. null --> ausencia de valor, más adelante se llamará con algún valor

--Estructurados -No primitivos
    1. Objetos {clave:valor, clave:valor}
    2. Funciones ()=>{} - functions
    3. Arrays [item1, item2, item3]

    OBJETO ES:
        una colección:
            -clave: valor --> propiedades del objeto (cualquier tipo de dato)
            -funcionalidades --> métodos (funciones)
*/

const user = {
    name: "Ainara",
    age: 37,
    email: "ainarahf@gmail.com",
    isPet: true,
    pet: { //es un objeto dentro de otro
        name: "Leo",
        type: "cat",
        gender: "male",
        parent: { //otro objeto dentro del anterior
            mother: "Vainilla",
            father: "Zeus",
        }
    },
    sayHi: function (){ // definimos una función dentro de una clave dentro del objeto, es una función anónima
        console.log(`El nombre es: ${this.name} la mascota: ${this.pet.name} y madre de la mascota es: ${this.pet.parent.mother}.`);
    },
};

user.sayHi(); //ponemos objeto.y la clave a llamar como si fuera función porque se trata de función anónima

//otra forma de acceder a las propiedades si por ejemplo queremos cambiar la edad
user["age"] = 30; // user.age=30

let propiedad = "email";
user[propiedad] = 'ainarahf@gmail.com';
propiedad = "name";
user[propiedad] = "Ainara Hermoso";