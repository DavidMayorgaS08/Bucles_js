const dias = parseInt(prompt("Número de días"));

let n = 1;

while(n <= dias){
    const c = parseFloat(prompt(`Temperatura del día ${n} en celsius`));

    k = c + 273.15;
    f = (c * 9/5) + 32;

    console.log(`La temperatura del día ${n} en grados kelvin es ${k} y en grados fahrenheit es ${f}`);

    n = n + 1;
}                                                                              