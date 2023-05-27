const n = parseInt(prompt("Digite número de vendedores"));
let acuGeneral = 0;
const base = parseInt(prompt("Digite sueldo base"));
for(let i = 1; i <= n; i++){
    let acuVentas = 0;
    for(let k = 1; k <= 3; k++){
        const venta = parseInt(prompt(`Digite venta ${k}`));
        acuVentas = acuVentas + venta;
    }
    const comision = acuVentas * 10 / 100;
    const sueldo = base + comision;
    acuGeneral = acuGeneral + sueldo;
    console.log(`En ventas: ${acuVentas} - Comision: ${comision} - Sueldo: ${sueldo}`);
}

console.log(`El total general es ${acuGeneral}`);