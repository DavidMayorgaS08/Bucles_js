const nmaterias = parseInt(prompt("Materias que cursan"));
const vmateria = parseInt(prompt("Valor de la materia"));

matricula = vmateria * nmaterias;

let estudiantes = 1;

while(estudiantes <= 38){

    const prom = parseInt(prompt("Promedio del estudiante"));

    if(prom >= 9){
        Vpagar = matricula - (matricula * 30 / 100);
        console.log(`El valor que debe pagar el estudiante ${estudiantes} es de ${Vpagar} y no se le cobrar IVA`);
    }else{
        Vpagar = matricula - (matricula * 10 / 100);
        console.log(`El valor que debe pagar el estudiante ${estudiantes} es de ${Vpagar} ya incluyendo el IVA`);
    }

    estudiantes = estudiantes + 1;
}