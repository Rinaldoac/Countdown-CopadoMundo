import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown("24 December 2022 23:59:59 GMT-0300");
const tempoParaCopaDoMundo = new Countdown(
  "19 November 2022 23:59:59 GMT-0300"
);

const dias = document.querySelector(".dias-copa");
dias.innerText = tempoParaCopaDoMundo.days;
const horas = document.querySelector(".horas-copa");
horas.innerText = tempoParaCopaDoMundo.hoursRestantes;
