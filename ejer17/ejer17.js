const VHora = parseFloat(prompt("Valor de la hora"));
const NHoras =parseInt(prompt("número de horas trabajadas"));

const NEmpleados = parseInt(prompt("Número de empleados"));

let n = 1;

while(n <= NEmpleados){
    sueldo = VHora * (NHoras * 30);

    Vpagar = sueldo - (sueldo * 8 / 100);

    n = n + 1;
}

console.log(`El sueldo de cada uno de los empleados es de ${Vpagar}`);