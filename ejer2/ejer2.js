let numero = Math.floor(Math.random()*80)
let descuento;
let totalCompra;

while (numero !== 0) {
    if (numero < 74) {
        descuento = 0.15;
    } else if (numero >= 74) {
        descuento = 0.2;
    }
    
    totalCompra = parseFloat(prompt("Introduce el total de la compra:"));
    
    const montoDescuento = totalCompra * descuento;
    const totalConDescuento = totalCompra - montoDescuento;
    
    console.log(`Descuento: ${montoDescuento.toFixed(2)}`);
    console.log(`Total con descuento: ${totalConDescuento.toFixed(2)}`);
    
    numero = Math.floor(Math.random()*80) 
}
