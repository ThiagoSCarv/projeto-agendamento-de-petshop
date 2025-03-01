import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function isSameHour(hour) {
  try {
    //Recupera os valores da API
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    //Da o parse nos valores recuperados
    const data = await response.json();
    //Verifica se pelo menos uma das datas dentro da api já está agendada
    const dailySchedules = data.some((schedule) =>
      dayjs(hour).isSame(schedule.when)
    );
    return dailySchedules;
  } catch (error) {
    console.log("Não foi possível buscar os agendamentos do dia");
    console.log(error);
  }
}
