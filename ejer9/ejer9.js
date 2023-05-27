while(true){
    const Nllantas = parseInt(prompt("Número de llantas compradas por el cliente"));

    if(Nllantas < 5){
        Vpagar = 300 * Nllantas;
        console.log(`Cada llanta le vale 300 y el total a pagar es ${Vpagar}`);
    }else if(Nllantas <= 5 && Nllantas <= 10){
        Vpagar = 250 * Nllantas;
        console.log(`Cada llanta le vale 250 y el total a pagar es ${Vpagar}`);
    }else if(Nllantas > 10){
        Vpagar = 200 * Nllantas;
        console.log(`Cada llanta vale 200 y el total a pagar es de ${Vpagar}`);
    }

    const rta = prompt("Otro cliente S/N");

    if(rta.toUpperCase() == "N"){
        break
    }
}