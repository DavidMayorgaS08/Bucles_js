while (true) {
  alert("Ingrese 3 números");
  const a = parseInt(prompt("Ingrese el número 1"));
  const b = parseInt(prompt("Ingrese el número 2"));
  const c = parseInt(prompt("Ingrese el número 3"));

  if (a !== b && a !== c && b !== c) {
    if ((a > b && a < c) || (a < b && a > c)) {
      console.log(`El número del medio es ${a}`);
    } else if ((b > a && b < c) || (b < a && b > c)) {
      console.log(`El número del medio es ${b}`);
    } else if ((c > a && c < b) || (c < a && c > b)) {
      console.log(`El número del medio es ${c}`);
    }
  } else {
    console.log("Hay números iguales");
  }

  const rta = prompt("Volver a hacerlo S/N");
  if (rta.toUpperCase() !== "S") {
    break;
  }
}

