import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { showSchedules } from "./show-schedules.js";

const selectedDate = document.querySelector('.date-home');

export async function schedulesDay() {
  const date = selectedDate.value

  const dailySchedules = await scheduleFetchByDay({ date });

  showSchedules([ dailySchedules ])
}