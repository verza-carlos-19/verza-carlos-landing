export function imprimirNumerosConIntervalo(
  finalNumero,
  tiempoIntervaloInicial,
  numeroCambioIntervalo,
  nuevoTiempoIntervalo,
  element,
  bf,
  af
) {
  let numero = 0;
  let intervalo = setInterval(() => {
    element.innerText = bf + numero + af;
    numero++;

    // Verifica si el número alcanzó el punto de cambio del intervalo
    if (numero === numeroCambioIntervalo) {
      clearInterval(intervalo); // Detiene el intervalo actual
      tiempoIntervaloInicial = nuevoTiempoIntervalo; // Actualiza el tiempo de intervalo
      intervalo = setInterval(intervalCallback, tiempoIntervaloInicial); // Crea un nuevo intervalo con el nuevo tiempo
    }

    // Verifica si se alcanzó el número final
    if (numero > finalNumero) {
      clearInterval(intervalo); // Detiene el intervalo cuando se alcanza el número final
    }
  }, tiempoIntervaloInicial);

  function intervalCallback() {
    element.innerText = bf + numero + af;
    numero++;
    // Verifica si se alcanzó el número final
    if (numero > finalNumero) {
      clearInterval(intervalo); // Detiene el intervalo cuando se alcanza el número final
    }
  }
}
