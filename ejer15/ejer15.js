let dolares = parseInt(prompt("Cantidad de dólares"));

const Cantdol = parseInt(prompt("Cuanto le corresponde a cada persona"));

pesos = Cantdol * 3550;

let personas = 1;

while(dolares > 0){

    console.log(`A la persona ${personas} le toca ${Cantdol} dólares que seria ${pesos} pesos Colombianos`);

    dolares = dolares - Cantdol;

    personas = personas + 1;
}
