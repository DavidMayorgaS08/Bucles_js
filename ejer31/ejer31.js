let personas = 1;

let niño = 0;
let joven = 0;
let adulto = 0;
let viejo = 0;

let pesoNiño = 0;
let pesoJoven = 0;
let pesoAdulto = 0;
let pesoViejo = 0;

while(personas <= 4){
    const edad = parseInt(prompt("Edad de la persona"));
    const peso = parseFloat(prompt("Peso de la persona"));

    if(edad >= 0 && edad <= 12){
        pesoNiño = pesoNiño + peso;
        niño = niño + 1;
    }else if(edad >= 13 && edad <= 29){
        pesoJoven = pesoJoven + peso;
        joven = joven + 1;
    }else if(edad >= 30 && edad <= 59){
        pesoAdulto = pesoAdulto + peso;
        adulto = adulto + 1;
    }else if(edad >= 60){
        pesoViejo = pesoViejo + peso;
        viejo = viejo + 1;
    }

    personas = personas + 1;
}

const promNiño = pesoNiño / niño;
const promJoven = pesoJoven / joven;
const promAdulto = pesoAdulto / adulto;
const promViejo = pesoViejo / viejo;


console.log(`Promedio de los pesos de ${niño} niños es de ${promNiño}`);
console.log(`Promedio de los pesos de ${joven} jovenes es ${promJoven}`);
console.log(`Promedio de los pesos de ${adulto} adultos es ${promAdulto}`);
console.log(`Promedio de los pesos de ${viejo} viejo es ${promViejo}`);
