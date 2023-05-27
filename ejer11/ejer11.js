const valor = parseInt(prompt("Valor del kilo de manzanas"));

while(true){
    const kilos = parseFloat(prompt("Kilos de manzanas comprados"));

    if(kilos >= 10.01){
        dcto = valor - (valor * 20 / 100);
        console.log(`Tiene un descuento del 20% y el valor queda en ${dcto}`);
    }else if(kilos >= 5.01 && kilos < 10){
        dcto = valor - (valor * 15 / 100);
        console.log(`Tiene un descuento del 15% y el valor queda en ${dcto}`);
    }else if(kilos >= 2.01 && kilos < 5){
        dcto = valor - (valor * 10 / 100);
        console.log(`Tiene un descuento del 10% y el valor queda en ${dcto}`);
    }else{
        console.log(`No tiene ningún descuento ${valor}`);
    }

    const rta = prompt("Otro usuario S/N");

    if(rta.toUpperCase() == "N"){
        break
    }
}