import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function isSameHour(hour) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    const data = await response.json();

    const dailySchedules = data.some((schedule) => dayjs(hour).isSame(schedule.when))
    return dailySchedules
  } catch (error) {
    console.log('Não foi possível buscar os agendamentos do dia')
    console.log(error)
  }
}
