const alumnos = parseInt(prompt("Número de alunmos"));

const vPro = 80000 / 5;

const vPre = 50000 / 5;

let nalum = 1;

while(nalum <= alumnos){
    const prom = parseFloat(prompt("Promedio del alumno"));
    const area = prompt("El alumno es de");

    if(area.toLowerCase() == "preparatoria"){
        if(prom >= 9.5){
            Vpagar = vPre * 55;
            console.log(`El alumno podra cursar 55 unidades y tendra un descuento del 25%; y tendra que pagar ${Vpagar - (Vpagar * 25 / 100)}`);
        }else if(prom >= 9 && prom < 9.5){
            Vpagar = vPre * 50;
            console.log(`El alumno podra cursar 50 unidades y tendra un descuento del 10%; y tendra que pagar ${Vpagar - (Vpagar * 10 / 100)}`);
        }else if(prom > 7 && prom < 9){
            Vpagar = vPre * 50;
            console.log(`El alumno podra cursar 50 unidades y no tendra un descuento; tendra que pagar ${Vpagar}`);
        }else{
            const perdidas = parseInt(prompt("Materias perdidas"));
            if(prom <= 7){
                if(perdidas >= 0 && perdidas <=3){
                    Vpagar = vPre * 45;
                    console.log(`El alumno podra cursar 45 unidades y no tendra un descuento; tendra que pagar ${Vpagar}`);
                }else{
                    Vpagar = vPre * 40;
                    console.log(`El alumno podra cursar 40 unidades y no tendra un descuento ${Vpagar}`);
                }
            }
        }
    }else if(area.toLowerCase() == "profesional"){
        if(prom >= 9.5){
            Vpagar = vPro * 55;
            console.log(`El alumno podra cursar 55 unidades y tendra un descuento del 25%; tendra que pagar ${Vpagar - (Vpagar * 25 / 100)}`);
        }else{
            Vpagar = vPro * 55;
            console.log(`El alumno podra cursar 55 unidades y no tendra un descuento; tendra que pagar ${Vpagar}`);
        }
    }

    nalum = nalum + 1;
}
