import { schedulesDay } from './schedules/load.js';

const selectedDate = document.querySelector('.date-home');

selectedDate.onchange = () => schedulesDay();
