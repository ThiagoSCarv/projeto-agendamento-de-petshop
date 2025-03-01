import { scheduleCancel } from "../../services/schedule-cancel.js";
import { schedulesDay } from "./load.js";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  //Adiciona o evento de click
  period.addEventListener("click", async (event) => {
    //Verifica se o evento ocorre na tag <a>
    if (event.target.classList.contains("cancel")) {
      const item = event.target.closest("li");
      //Recupera o id da li
      const { id } = item.dataset;
      //Verifica se o usuário deseja excluir o agendamento
      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );
        //Chama a função que remove o Agendamento
        if (isConfirm) {
          await scheduleCancel({ id });
          //Chama a função para mostrar os agendamentos do dia
          schedulesDay();
        }
      }
    }
  });
});
