let positivos = 0;
let negativos = 0;
let ceros = 0;

while(true){
    const num = parseInt(prompt("Ingrese un número"));

    if(num < 0){
        negativos = negativos + 1;
    }else if(num > 0){
        positivos = positivos + 1;
    }else{
        ceros = ceros + 1;
    }


    const rta = prompt("otro número S/N");
    if(rta.toUpperCase == "N"){
        break        
    }
}

console.log(`La cantidad de números positivos son ${positivos}`);
console.log(`La cantidad de números negativos son ${negativos}`);
console.log(`La cantidad de ceros son ${ceros}`);