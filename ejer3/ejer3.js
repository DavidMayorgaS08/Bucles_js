const personas = parseInt(prompt("Número de personas"));

let cp = 1
let pulsaciones = 0


while (cp <= personas){
    const edad = parseInt(prompt("Edad"));
    const sexo = prompt("Sexo F/N");

    if(sexo.toUpperCase() == "F"){
        pulsaciones = (220 - edad) / 10;
        console.log(`El número de pulsasiones de la persona ${cp} es de ${pulsaciones}`);
    }
    if(sexo.toUpperCase() == "M"){
        pulsaciones = (210 - edad) / 10;
        console.log(`El número de pulsasiones de la persona ${cp} es de ${pulsaciones}`);
    }

    cp = cp + 1
}


