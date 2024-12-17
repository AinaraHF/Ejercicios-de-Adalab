/*
Al enviar los datos del formulario:
    1. Crear un objeto con esos datos
    2. Pintar el producto en el HTML (li)
*/

const form = document.querySelector('.js-form');
const list = document.querySelector('.js-list');
const product={
    name: "",
    price: "",
    url: "",
}

const render = ()=> { //XKE NO SE ME PINTA EN LA WEB?????
    const li = `
        <li>
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <img src="${product.url}" alt="">
        </li>`;
    list.innerHTML = li;
}

const handleInput = (ev) => { //siempre comprobar con console.log que funciona!!! para no hacer algo supercostoso y luego ke no vaya
    const value = ev.target.value; //el input sería el target y el form el currentTarget
    const clave = ev.target.id; // para saber en qué input cambió el value
    //product [clave] = value; se puede hacer con el if, pero esta sería la forma más simplificada y corta
    if(clave === "name"){
        product.name = value;
    }else if (clave === "price"){
        product.price = value;
    }else {
        product.url = value;
    }
    console.log(product);
};

form.addEventListener('input', handleInput); //input va poniendo los datos uno a uno, change solo una vez salieras del input en sí