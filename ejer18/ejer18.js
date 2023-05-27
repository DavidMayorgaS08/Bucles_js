const empleados = parseInt(prompt("Número de empleados"));

let n = 1;

while(n <= empleados){
    const Vhora = parseFloat(prompt("Valor de la hora"));
    const Nhoras = parseInt(prompt("Número de horas"));

    salarioB = Vhora * Nhoras;
    SalAli = salarioB * 1 / 100; 
    Salud = salarioB * 1.5 / 100;
    Pension = salarioB * 28.1 / 100;
    Aportes = salarioB * 0.55 / 100;
    neto = salarioB + SalAli + 45000;
    resta = Salud + Pension + Aportes;
    Catastrofe = (neto - resta) * 0.05 / 100;

    console.log(`Salario base es de ${salarioB}, el auxilio de alimentación es de ${SalAli}, el subsidio de transporte es de 45000, descuentos de salud pension y aportes parafiscales son de ${Salud}, ${Pension}, ${Aportes}. El salario neto es de ${neto - resta} y el descuento de la donación es de ${Catastrofe}`);

    n = n + 1;
}




