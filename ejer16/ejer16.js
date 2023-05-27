const NAtletas = parseInt(prompt("Número de atletas"));

let n = 1;

while(n <= NAtletas){
    const comp1 = parseFloat(prompt(`Distancia de la competencia 1 en km del atleta ${n}`));
    const comp2 = parseFloat(prompt(`Distancia de la competencia 2 en km del atleta ${n}`));
    const comp3 = parseFloat(prompt(`Distancia de la competencia 3 en km del atleta ${n}`));

    prom = (comp1 + comp2 + comp3) / 3;

    console.log(`La distancia promedio recorrida del atleta número ${n} es de ${prom}km`);

    n = n + 1;
}