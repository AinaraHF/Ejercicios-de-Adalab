function price(a){
    return `Precio sin IVA: ${a}, IVA ${0.21*a} y Total: ${a+0.21*a}.`;
}

price(37);
console.log(price(37));