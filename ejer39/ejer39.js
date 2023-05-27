const NAutos = parseInt(prompt("Número de autos"));

let n = 1;

while(n <= NAutos){
    const digito = parseInt(prompt(`Ultimo digito de la placa del carro ${n}`));
    
    if(digito == 1 || digito == 2){
        console.log(`El carro ${n} es de color amarillo`);
    }else if(digito == 3 || digito == 4){
        console.log(`El carro ${n} es de color rosa`);
    }else if(digito == 5 || digito == 6){
        console.log(`El carro ${n} es de color roja`);
    }else if(digito == 7 || digito == 8){
        console.log(`El carro ${n} es de color verde`);
    }else if(digito == 9 || digito == 0){
        console.log(`El carro ${n} es de color azul`);
    }

    n = n + 1;
}
