import { schedulesDay } from "./schedules/load.js";

const selectedDate = document.querySelector(".date-home");
//Mostra os agendamentos do dia de acordo com a data do input da página inicial
selectedDate.onchange = () => schedulesDay();
