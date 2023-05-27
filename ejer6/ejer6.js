const Gdiarias = parseInt(prompt("Ganancias diarias"));
const Pdia = parseInt(prompt("Puntos del primer dia"));

let dias = 1;
let puntos = Pdia;

while(dias < 5){

    const Pdias = parseInt(prompt("Puntos del siguiente dia"));

    puntos = puntos + Pdias;

    dias = dias + 1;
}

console.log(dias);

let PromPun = puntos / 5;

if(PromPun > 170){
    multa = Gdiarias * 50 / 100;
    console.log(`Tiene una sanción de parar la producción y una multa de ${multa}`);
}else{
    console.log("No tiene ninguna sanción y tampoco multas");
}