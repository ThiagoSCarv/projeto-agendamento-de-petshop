import dayjs from "dayjs";

const periodMorning = document.querySelector("#period-morning");
const periodAfternoon = document.querySelector("#period-afternoon");
const periodNight = document.querySelector("#period-night");

export function showSchedules([schedules]) {
  //Limpa o conteudo das ULs
  periodMorning.innerHTML = "";
  periodAfternoon.innerHTML = "";
  periodNight.innerHTML = "";

  try {
    //Percorre os agendamentos e cria cada elemento
    schedules.forEach((schedule) => {
      //Cria a li e atribui um id
      const newLi = document.createElement("li");
      newLi.setAttribute("data-id", schedule.id);
      //Cria a div
      const newDiv = document.createElement("div");
      //Cria o horário e adiciona as classes para estilização
      const scheduleHours = document.createElement("strong");
      scheduleHours.classList.add(
        "schedule-hours",
        "ff-inter",
        "fs-md",
        "lh-lg",
        "fw-bold"
      );
      scheduleHours.textContent = dayjs(schedule.when).format("HH:mm");
      //Cria o nome do cliente e adiciona as classes para estilização
      const petName = document.createElement("span");
      petName.classList.add(
        "pet-name",
        "ff-inter",
        "fs-md",
        "lh-lg",
        "fw-bold"
      );
      petName.textContent = schedule.petName;
      //Cria o nome do pet e adiciona as classes para estilização
      const petOwner = document.createElement("span");
      petOwner.classList.add(
        "pet-owner",
        "ff-inter",
        "fs-md",
        "lh-lg",
        "fw-medium"
      );
      petOwner.textContent = `/ ${schedule.clientName}`;
      //Faz o append dos elementos dentro da div
      newDiv.append(scheduleHours, petName, petOwner);
      //Cria a descrição do serviço e adiciona as classes para estilização
      const serviceDescription = document.createElement("p");
      serviceDescription.classList.add(
        "service-description",
        "ff-inter",
        "fs-md",
        "lh-lg",
        "fw-medium"
      );
      serviceDescription.textContent = schedule.description;
      //Cria o link e adiciona as classes para estilização
      const cancel = document.createElement("a");
      cancel.classList.add("cancel", "ff-inter", "ff-sm", "lh-md", "fw-medium");
      cancel.setAttribute("href", "#");
      cancel.textContent = "Remover agendamento";
      //Faz o append dos elementos criados na li
      newLi.append(newDiv, serviceDescription, cancel);
      //Verifica o horário atual
      const hour = dayjs(schedule.when).hour();
      //Faz o append da li de acordo com o período do dia
      if (hour <= 12) {
        periodMorning.appendChild(newLi);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(newLi);
      } else {
        periodNight.appendChild(newLi);
      }
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível exibir os agendamentos");
  }
}
