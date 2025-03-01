import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
  try {
    //Recupera os valores da API
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    //Da o parse nos valores
    const data = await response.json();
    //Filtra os valores de maneira que a data seja a atual e a hora não seja anterior a atual
    const dailySchedules = data.filter((schedule) => {
      const isSameDate = dayjs(date).isSame(schedule.when, "day");
      const isBeforeHour = dayjs(schedule.when).isBefore(dayjs());

      if (isSameDate && !isBeforeHour) {
        return isSameDate;
      }
    });

    return dailySchedules;
  } catch (error) {
    alert("Não foi possível buscar os agendamentos do dia");
    console.log(error);
  }
}
