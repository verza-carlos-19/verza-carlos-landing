import { enviarEmail } from "./assets/correo.js";
import { imprimirNumerosConIntervalo } from "./assets/counter.js";
import {
  showPresentation,
  showStats,
  showMoreText,
  showSlider,
  hideRaces,
} from "./assets/shows.js";
const fondo = document.querySelector(".hero--fondo");
const portada = document.querySelector(".head--portada");
const cajaHero = document.querySelector(".hero--head");
const showMoreInfo = document.querySelector(".showMoreInfo");
const countRaces = document.querySelector(".stat--races");
const countYears = document.querySelector(".stat--years");
const formulario = document.querySelector(".contacto--formulario");

const submitEmail = (e) => {
  e.preventDefault();
  enviarEmail();
};

const scrollController = () => {
  const scroll = window.scrollY;
  if (scroll > 0) {
    fondo.style.width = "120vw";
    fondo.style.left = "0px";
    portada.style.width = "50%";
    cajaHero.style.top = "-72vw";
    cajaHero.style.marginBottom = "-300px";
    showPresentation(true);
  } else {
    showPresentation(false);
    fondo.style.width = "190vw";
    fondo.style.left = "-110px";
    portada.style.width = "80%";
    cajaHero.style.top = "-124vw";
  }
  if (showMoreInfo.textContent === "VER MENOS") {
    if (scroll > 1200) {
      showStats(true, 1970, 2050);
    } else {
      showStats(false);
    }
    if (scroll > 550 && scroll < 2100) {
      if (countRaces.textContent === "0") {
        imprimirNumerosConIntervalo(150, 15, 145, 250, countRaces, "+", "");
      }
      if (countYears.textContent === "0") {
        imprimirNumerosConIntervalo(15, 10, 10, 250, countYears, "+", "años");
      }
    }
    if (scroll > 2650) {
      showSlider(true);
    } else {
      showSlider(false);
    }
    if (scroll > 2750) {
      hideRaces(true);
    } else {
      hideRaces(false);
    }
  } else {
    if (scroll > 250) {
      showStats(true, 900, 1060);
    } else {
      showStats(false);
    }
    if (scroll > 350 && scroll < 1000) {
      if (countRaces.textContent === "0") {
        imprimirNumerosConIntervalo(150, 15, 145, 250, countRaces, "+", "");
      }
      if (countYears.textContent === "0") {
        imprimirNumerosConIntervalo(15, 10, 10, 250, countYears, "+", "años");
      }
    }
    if (scroll > 1500) {
      showSlider(true);
    } else {
      showSlider(false);
    }
    if (scroll > 1700) {
      hideRaces(true);
    } else {
      hideRaces(false);
    }
  }
};

// Ejemplo de uso: contar hasta 15, cambiar el intervalo cuando se llega a 5, y establecer un nuevo intervalo de 500 milisegundos (0.5 segundos)

const init = () => {
  window.addEventListener("scroll", scrollController);
  showMoreInfo.addEventListener("click", showMoreText);
  formulario.addEventListener("submit", submitEmail);
};

init();
