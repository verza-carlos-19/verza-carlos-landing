const fondo = document.querySelector(".hero--fondo");
const portada = document.querySelector(".head--portada");
const cajaHero = document.querySelector(".hero--head");
const textPresent = document.querySelector(".present");
const showMoreInfo = document.querySelector(".showMoreInfo");
const countRaces = document.querySelector(".stat--races");
const countYears = document.querySelector(".stat--years");
const fondoStats = document.querySelector(".stats--fondo");
const countRacesBox = document.querySelector(".count--races");
const countYearsBox = document.querySelector(".count--years");
const racesTxt = document.querySelector(".races--txt");
const yearsTxt = document.querySelector(".years--txt");
const popups = document.querySelectorAll(".stat--popup");
const sliderImg = document.querySelectorAll(".slider--img");
const slider = document.querySelector(".slider");
const btnSponsors = document.querySelector(".pruebaSponsors");

const showSlider = (arg) => {
  if (arg) {
    sliderImg[0].style.width = "96vw";
    slider.style.width = "100vw";
    slider.style.left = "0";
    slider.style.top = "-5rem";
    slider.style.padding = "2vw";
    slider.style.zIndex = "0";
    console.log("ok");
  } else {
    console.log("first");
    sliderImg[0].style.width = "190vw";
    slider.style.width = "180vw";
    slider.style.left = "-7rem";
    slider.style.top = "-15rem";
    slider.style.padding = "0";
    slider.style.zIndex = "0";
  }
};

const renderStat = (cont, i, bf, af) => {
  cont.innerText = bf + i + af;
};

const counter = (cont, point, poinTime, time, max, bf, af) => {
  for (let i = 0; i <= max; i++) {
    // if (point < i) {
    //   setTimeout(renderStat, poinTime, cont, i, bf, af);
    // } else {
    //   setTimeout(renderStat, time, cont, i, bf, af);
    // }
    setTimeout(renderStat, time, cont, i, bf, af);
  }
};

const showMoreText = () => {
  textPresent.classList.toggle("textShort");
  if (showMoreInfo.textContent === "VER MAS") {
    showMoreInfo.textContent = "VER MENOS";
  } else {
    showMoreInfo.textContent = "VER MAS";
  }
};

const showStats = (arg, num, numDos) => {
  const scroll = window.scrollY;
  if (arg) {
    countRacesBox.style.opacity = "1";
    countYearsBox.style.opacity = "1";
    fondoStats.style.opacity = "1";
    fondoStats.style.width = "150vw";
    fondoStats.style.left = "-155px";
    yearsTxt.style.fontSize = "12vw";
    racesTxt.style.fontSize = "12vw";
    countRaces.style.fontSize = "20vw";
    countYears.style.fontSize = "20vw";
  } else {
    console.log("okky");
    // fondoStats.style.width = "0vw";
    countRacesBox.style.opacity = "0";
    countYearsBox.style.opacity = "0";
    fondoStats.style.opacity = "0";
    fondoStats.style.left = "-155px";
    // yearsTxt.style.fontSize = "0vw";
    // racesTxt.style.fontSize = "0vw";
    // countRaces.style.fontSize = "0vw";
    // countYears.style.fontSize = "0vw";
    countRaces.textContent = "0";
    countYears.textContent = "0";
  }
  if (arg && scroll > num) {
    countRacesBox.style.opacity = "0";
    fondoStats.style.width = "100vw";
    fondoStats.style.left = "0";
    yearsTxt.style.fontSize = "8vw";
    countYears.style.fontSize = "14vw";
    countYearsBox.style.opacity = "1";

    fondoStats.style.opacity = "1";
    countRaces.textContent = "0";
  }
  if (arg && scroll > numDos) {
    countYearsBox.style.opacity = "0";
    fondoStats.style.opacity = "0";
    countRaces.textContent = "0";
    countYears.textContent = "0";
  }
};

const showPresentation = (arg) => {
  if (arg) {
    textPresent.style.color = "rgb(219, 222, 152, 1)";
    showMoreInfo.style.color = "rgb(219, 222, 152, 1)";
    showMoreInfo.style.borderBottom = "1px solid rgb(219, 222, 152, 1)";
  } else {
    textPresent.style.color = "rgb(219, 222, 152, 0)";
    showMoreInfo.style.color = "rgb(219, 222, 152, 0)";
    showMoreInfo.style.borderBottom = "1px solid rgb(219, 222, 152, 0)";
  }
};
const counterScroll = () => {
  const scroll = window.scrollY;
  if (scroll > 0) {
    fondo.style.width = "120vw";
    fondo.style.left = "0px";
    portada.style.width = "50%";
    cajaHero.style.top = "-300px";
    cajaHero.style.marginBottom = "-300px";
    showPresentation(true);
  } else {
    showPresentation(false);
    fondo.style.width = "190vw";
    fondo.style.left = "-110px";
    portada.style.width = "80%";
    cajaHero.style.top = "-480px";
  }
  if (scroll > 250) {
    showStats(true, 900, 1060);
  } else {
    showStats(false);
  }

  if (scroll > 1500) {
    showSlider(true);
  } else {
    showSlider(false);
  }

  if (scroll > 350 && scroll < 1000) {
    if (countRaces.textContent === "0") {
      imprimirNumerosConIntervalo(150, 15, 145, 150, countRaces, "+", "");
    }
    if (countYears.textContent === "0") {
      imprimirNumerosConIntervalo(15, 10, 7, 200, countYears, "+", "años");
    }
  }
};

function imprimirNumerosConIntervalo(
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

// Ejemplo de uso: contar hasta 15, cambiar el intervalo cuando se llega a 5, y establecer un nuevo intervalo de 500 milisegundos (0.5 segundos)

const testSpon = () => {
  imprimirNumerosConIntervalo(150, 10, 140, 250, countRaces, "+", "");
  imprimirNumerosConIntervalo(15, 10, 7, 200, countYears, "+", "años");
  // 2000 milisegundos = 2 segundos
};

const init = () => {
  window.addEventListener("scroll", counterScroll);
  showMoreInfo.addEventListener("click", showMoreText);
  //   initPopups();
};

init();
