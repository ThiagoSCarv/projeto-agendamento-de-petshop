import { schedulesDay } from "./schedules/load.js";
//Carrega os agendamentos do dia quando a página é carregada
document.addEventListener("DOMContentLoaded", function () {
  schedulesDay();
});
