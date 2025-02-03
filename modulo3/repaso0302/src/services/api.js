function api(){ //creamos aquí la función pero tenemos que exportarla para poder importarla en App en el futuro

    return fetch ('https://randomuser.me/api/?results=50') // si no pusiéramos el return, nos saldría undefined xke la función necesita return
    .then((resp) => resp.json())
    .then((data)=> {

        const newArray = data.results.map((user)=>{ //si la función del map lleva {} entonces TIENE que tener un return
            return{
                id: user.login.uuid, //si no hubiera id, pero si uuid se puede usar este y si hay ambos mejor uuid tb
                name: user.name.first + " " + user.name.last, //como quiero nombre y apellido concateno y dejo " " un espacio en medio
                city: user.location.city,
                gender: user.gender,
                img: user.picture.large, //mejor la grande porque la peque se puede deformar al cambiar de tamaño
                phone: user.phone,
                email:user.email,
            };
        });
            return newArray; //el otro return es del map, este es para que nos devuelva el listado en sí para poder usarlo
    });
}

export default api;