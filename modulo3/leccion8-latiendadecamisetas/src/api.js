function api(){

    return fetch ("https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/tshirt-eshop-v1/products.json")
    .then((resp)=>resp.json())
    .then((data) =>{
        const newArray = data.items.map((item)=> {
            return{
                id: item.id,
                img: item.imageUrl,
                name: item.name,
                price: item.price,
            }
        })
        return newArray
    })
    
}

export default api;