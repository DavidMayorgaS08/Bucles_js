while (true) {
  const valorPasaje = parseFloat(prompt("Ingrese el valor del pasaje:"));
  const numPasajeros = parseInt(prompt("Ingrese el número de pasajeros:"));
  const nBuses = parseInt(prompt("Número de microbuses"));

  dinero = valorPasaje * numPasajeros;

  console.log(`El valor a pagar a cada uno es ${dinero / nBuses}`);

  const rta = prompt("Realizar de nuevo S/N");
  if(rta.toUpperCase() == "N"){
    break
  }
}
