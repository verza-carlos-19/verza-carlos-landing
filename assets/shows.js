const fondoStats = document.querySelector(".stats--fondo");
const countRacesBox = document.querySelector(".count--races");
const countYearsBox = document.querySelector(".count--years");
const racesTxt = document.querySelector(".races--txt");
const yearsTxt = document.querySelector(".years--txt");
const countRaces = document.querySelector(".stat--races");
const countYears = document.querySelector(".stat--years");
const textPresent = document.querySelector(".present");
const showMoreInfo = document.querySelector(".showMoreInfo");
const sliderImg = document.querySelectorAll(".slider--img");
const slider = document.querySelector(".slider");
const racesSecs = document.querySelector(".races--secs");
const hideRaces = (arg) => {
  if (arg) {
    racesSecs.style.opacity = "0";
  } else {
    racesSecs.style.opacity = "1";
  }
};

const showStats = (arg, num, numDos) => {
  const scroll = window.scrollY;
  if (arg) {
    countRacesBox.style.opacity = "1";
    countYearsBox.style.opacity = "1";
    fondoStats.style.opacity = "1";
    fondoStats.style.width = "133vw";
    fondoStats.style.left = "-85px";
    yearsTxt.style.fontSize = "12vw";
    racesTxt.style.fontSize = "12vw";
    countRaces.style.fontSize = "20vw";
    countYears.style.fontSize = "20vw";
    yearsTxt.style.opacity = "1";
    racesTxt.style.opacity = "1";
    countRaces.style.opacity = "1";
    countYears.style.opacity = "1";
  } else {
    countRacesBox.style.opacity = "1";
    countYearsBox.style.opacity = "0";
    fondoStats.style.opacity = "0";
    fondoStats.style.left = "-155px";
    countRaces.textContent = "0";
    countYears.textContent = "0";
    yearsTxt.style.opacity = "0";
    racesTxt.style.opacity = "0";
    countRaces.style.opacity = "0";
    countYears.style.opacity = "0";
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
const showMoreText = () => {
  textPresent.classList.toggle("textShort");
  if (showMoreInfo.textContent === "VER MAS") {
    showMoreInfo.textContent = "VER MENOS";
  } else {
    showMoreInfo.textContent = "VER MAS";
  }
};

const showSlider = (arg) => {
  if (arg) {
    sliderImg.forEach((img) => {
      img.style.width = "98vw";
    });
    slider.style.width = "100vw";
    slider.style.left = "0";
    slider.style.top = "-9rem";
    slider.style.padding = "1vw";
    slider.style.zIndex = "0";
  } else {
    sliderImg.forEach((img) => {
      img.style.width = "180vw";
    });
    slider.style.width = "180vw";
    slider.style.left = "-7rem";
    slider.style.top = "-15rem";
    slider.style.padding = "0";
    slider.style.zIndex = "0";
  }
};

export { showMoreText, showStats, showPresentation, hideRaces, showSlider };
