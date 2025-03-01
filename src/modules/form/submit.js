import dayjs from "dayjs";
import { scheduleNew } from "../../services/new-schedule";
import { schedulesDay } from "../schedules/load.js";
import { isSameHour } from "../../services/is-same-hour.js";

const form = document.querySelector("form");
const tutorsName = document.querySelector("#tutors-name");
const pet = document.querySelector("#pet-name");
const phone = document.querySelector("#phone");
const serviceDescription = document.querySelector("#service-description");
const dateSubmit = document.querySelector(".date-submit");
const dateHome = document.querySelector(".date-home");
const hours = document.querySelector("#hours");

//Data atual para o input date
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

dateSubmit.value = inputToday;
dateSubmit.min = inputToday;

//Define valor atual e minimo para input date/time
hours.setAttribute("value", dayjs().format("HH:mm"));
dateHome.setAttribute("min", dayjs().format("YYYY-MM-DD"));
dateHome.setAttribute("value", dayjs().format("YYYY-MM-DD"));

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    //Recupera os valores do input e retira os espaços em branco
    const clientName = tutorsName.value.trim();

    const petName = pet.value.trim();

    const telphone = phone.value.trim();

    const description = serviceDescription.value.trim();

    //Gera um id especifico para cada agendamento
    const id = new Date().getTime();

    //Recupera somente a hora e cria um objeto dayjs
    const [hour] = hours.value.split(":");
    const when = dayjs(dateSubmit.value).add(hour, "hour");

    //Verifica se o valor do input date é anterior a data atual
    const isBefore = dayjs(when).isBefore(dayjs());
    //Chama a função que verifica se o horário já está marcado
    const avaliable = await isSameHour(when);

    if (avaliable || isBefore) {
      alert("Horário indisponível! Tente Novamente.");
    } else {
      //Envia os dados para a API
      await scheduleNew({
        id,
        clientName,
        petName,
        telphone,
        description,
        when,
      });
    }
    //Chama a função para mostrar os agendamentos do dia
    schedulesDay();
    //Limpa os valores dos inputs de texto
    tutorsName.value = ''
    pet.value = ''
    serviceDescription.value = ''
    phone.value = ''
    
  } catch (error) {
    alert("Erro ao enviar formulário");
    console.log(error);
  }
};
