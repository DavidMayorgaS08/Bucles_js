const Vpc = 11000;

while(true){
    const Npc = parseInt(prompt("Número de computadores que va a comprar"));

    if(Npc < 5){
        Valor = Vpc * Npc;
        Vpagar = Valor - (Valor * 10 / 100);
        console.log(`El cliente compro ${Npc} computadores, tiene un descuento de 10% y debe pagar ${Vpagar}`);
    }else if(Npc >= 5 && Npc < 10){
        Valor = Vpc * Npc;
        Vpagar = Valor - (Valor * 20 / 100);
        console.log(`El cliente compro ${Npc} computadores, tiene un descuento de 20% y debe pagar ${Vpagar}`);
    }else if(Npc >= 10){
        Valor = Vpc * Npc;
        Vpagar = Valor - (Valor * 40 / 100);
        console.log(`El cliente compro ${Npc} computadores, tiene un descuento de 40% y debe pagar ${Vpagar}`);
    }
    
    const rta = prompt("Hay otro cliente S/N");

    if(rta.toUpperCase() == "N"){
        break
    }
}