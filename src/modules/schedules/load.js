import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { showSchedules } from "./show-schedules.js";

const selectedDate = document.querySelector(".date-home");

export async function schedulesDay() {
  //Define a data do input da tela principal como o dia atual
  const date = selectedDate.value;
  //Recupera os agendamentos do dia filtrados
  const dailySchedules = await scheduleFetchByDay({ date });
  //Chama a função para renderizar os agendaentos do dia
  showSchedules([dailySchedules]);
}
