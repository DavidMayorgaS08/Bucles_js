const precio = parseInt(prompt("Valor del automóvil y el terreno"));

const devaluacionA = precio - (precio * (3 * 0.2));
const incrementoT = precio + (precio * (3 * 0.1));

if (devaluacionA < (incrementoT/2)){
    console.log("Deberia comprar el automóvil");
}else{
    console.log("Deberia comprar el terreno");
}
