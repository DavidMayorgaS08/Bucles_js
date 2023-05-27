for (let i = 1; i <=10 ; i++) {
    const llantas=parseInt(prompt("digite llantas"))
    let totalPago=0
    if(llantas<5) totalPago=llantas*800
    else totalPago=llantas*700

    console.log(totalPago);
    

}