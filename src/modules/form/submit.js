import dayjs from "dayjs";
import { scheduleNew } from "../../services/new-schedule";
import { schedulesDay } from "../schedules/load.js"
import { isSameHour } from "../../services/is-same-hour.js";

const form = document.querySelector("form")
const tutorsName = document.querySelector("#tutors-name")
const pet = document.querySelector("#pet-name")
const phone = document.querySelector("#phone")
const serviceDescription = document.querySelector("#service-description")
const dateSubmit = document.querySelector(".date-submit")
const dateHome = document.querySelector(".date-home")
const hours = document.querySelector("#hours")

//Data atual para o input date
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

dateSubmit.value = inputToday;
dateSubmit.min = inputToday;
hours.setAttribute('value', dayjs().format('HH:mm'))
dateHome.setAttribute('min', dayjs().format('YYYY-MM-DD'))
dateHome.setAttribute('value', dayjs().format('YYYY-MM-DD'))

form.onsubmit = async (event) => {
  event.preventDefault();
  
  try {
    const clientName = tutorsName.value.trim();

    const petName = pet.value.trim();

    const telphone = phone.value.trim()

    const description = serviceDescription.value.trim()

    const id = new Date().getTime();

    const [hour] = hours.value.split(':');

    const when = dayjs(dateSubmit.value).add(hour, 'hour')

    const isBefore = dayjs(when).isBefore(dayjs());

    const avaliable = await isSameHour(when)
    
    if (avaliable || isBefore) {
      alert('Horário indisponível! Tente Novamente.')
    } else {
      await scheduleNew({id, clientName, petName, telphone, description, when})
    }

    schedulesDay()

  } catch (error) {
    alert('Erro ao enviar formulário');
    console.error(error);
  }
}