const monto = parseInt(prompt("Monto de la finanza"));

if(monto < 50000){
    descuento = monto * 3 / 100;
    console.log(`El cliente debe pagar una cuota de ${descuento} que corresponde al 3% de ${monto}`);
}else{
    descuento = monto * 2 / 100;
    console.log(`El cliente debe pagar una cuota de ${descuento} que corresponde al 2% de ${monto}`);
}