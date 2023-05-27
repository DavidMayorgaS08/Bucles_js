while(true){
    const precio = parseInt(prompt("Precio del estéreo"));
    const marca = prompt("Marca del estéreo en mayúscula");

    if(precio >= 2000){
        descuPr = precio - (precio * 10 / 100);
        if(marca.toUpperCase() == "NOSY"){
            descuMar = descuPr - (descuPr * 5 / 100);
            console.log(`El estéreo tiene descuento de 10% y 5%, y queda en ${descuMar}`);
        }else{
            console.log(`El estéreo tiene 10% de descuento y queda en ${descuPr}`);
        }
    }else{
        console.log(`El estéreo cuesta ${precio}`);
    }

    const rta = prompt("Otro cliente S/N");

    if(rta.toUpperCase() == "N"){
        break
    }
}